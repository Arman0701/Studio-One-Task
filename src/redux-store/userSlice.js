import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import helpers
import generateFakeID from "../helpers/generateFakeID";
import generateFakeAccessToken from "../helpers/generateFakeToken";
import getToday from "../helpers/getToday";

export const getUserProfile = createAsyncThunk(
    "userSlice/getUserProfile",
    async (userData) => {
        const { username, password } = userData;

        const response = await fetch(
            `http://localhost:3001/users?profile.username=${username}&profile.password=${password}`
        );
		return await response.json();
    }
);

export const registerUser = createAsyncThunk(
    "userSlice/registerUser",
    async (userData) => {

        const newUser = {
            id: generateFakeID(),
            profile: {
                ...userData,
                created: getToday(),
                token: generateFakeAccessToken(),
            },
            role: "user",
            posts: [],
        };
        
		const response = await fetch(`http://localhost:3001/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

		return await response.json();
    }
);

export const initUser = createAsyncThunk(
    "userSlice/inituser",
    async (token) => {

        const response = await fetch(
            `http://localhost:3001/users?profile.token=${token}`
        );
		
		return await response.json();
    }
);

export const addUserPost = createAsyncThunk(
    "userSlice/addPost",
    async (postData, { getState }) => {
		let user = getState().userSlice.user;

		if (Array.isArray(user)) {
			user = user[0]
		}

		const response = await fetch(`http://localhost:3001/users/${user.id}`, {
			method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
		})

		return await response.json()
    }
);

export const removeUserPost = createAsyncThunk(
	"userSlice/removePost",
	async (postID, {getState}) => {
		let user = getState().userSlice.user;
		if (Array.isArray(user)) {
			user = user[0]
		}

		const modified = {
			...user,
			posts: user.posts.filter(post => post.id !== postID),
		}
		
		const response = await fetch(`http://localhost:3001/users/${user.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(modified)
		})
		return await response.json();
	}
)

export const editUserPost = createAsyncThunk(
	"userSlice/editUserPost",
	async (editedPost, { getState }) => {
		const postID = editedPost.id;
		delete editedPost.index

		let user = getState().userSlice.user
		if (Array.isArray(user)) {
			user = user[0]
		}

		const userID = user.id
		const modified = {
			...user,
			posts: user.posts.map(post => {
				if (post.id === postID) {
					return editedPost;
				}
				return post;
			})
		}

		const response = await fetch(`http://localhost:3001/users/${userID}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(modified)
		})

		return await response.json()
	}
)

export const deleteAccount = createAsyncThunk(
	"userSlice/deleteAccount",
	async (password, {getState, rejectWithValue}) => {
		let user = getState().userSlice.user;
		console.log("user ::: ", user)
		if (Array.isArray(user)) {
			user = user[0]
		}
		console.log("user ::: ", user)
		if (user.profile.password !== password) {
			rejectWithValue("Password that you provided is not correct.")
		} 

		const profileRemovingResponse = await fetch(`http://localhost:3001/users/${user.id}`, {
			method: "DELETE"
		})

		const postsID = user.posts.map(post => post.id)
		console.log("posts ::: ", postsID)

		const promises = postsID.map(async id => {
			return await fetch(`http://localhost:3001/newsfeed/${id}`, {
				method: "DELETE"
			})
		})

		Promise.all([profileRemovingResponse, ...promises])
		.then(responses => {
			const allJSON = responses.map(res => res.json())
			return allJSON;
		})
		.catch(error => {
			alert(error)
		})
		// return response.json
	}
)


const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem("news-app-user");
            state.user = null;
        }
    },
	extraReducers: (builder) => {
		builder.addCase(initUser.fulfilled, (state, { payload }) => {
			state.user = payload
		})
		.addCase(initUser.rejected, (state, { payload }) => {
			// there is no error handler for this case,
			// because if user can't be initialized
			// page is redirecting to '/login' route
		})

		.addCase(addUserPost.fulfilled, (state, { payload }) => {
			state.user = payload
		})
		.addCase(addUserPost.rejected, (state, { payload }) => {
			// if an error occured
			alert("An error occurred while adding the article. Please, fill all the fields.")
		})
		
		.addCase(removeUserPost.fulfilled, (state, { payload }) => {
			state.user = payload
		})
		.addCase(removeUserPost.rejected, (state, { payload }) => {
			// if an error occured
			alert("An error occurred while deleting the article.")
		})

		.addCase(editUserPost.fulfilled, (state, { payload }) => {
			state.user = payload
		})
		.addCase(editUserPost.rejected, (state, { payload }) => {
			// if an error occured
			alert("An error occurred while editing the article.")
		})

	}
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
