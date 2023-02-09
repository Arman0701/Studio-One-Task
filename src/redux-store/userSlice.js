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
        const data = await response.json();
		return data;
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

        const data = await response.json();
		return data;
    }
);

export const initUser = createAsyncThunk(
    "userSlice/inituser",
    async (token) => {
        const response = await fetch(
            `http://localhost:3001/users?profile.token=${token}`
        );
        const data = await response.json();
		return data
    }
);

export const addUserPost = createAsyncThunk(
    "userSlice/addPost",
    async (postData, { getState }) => {
        // I tried to get user data using getState function
        // but for some reason it returns "undefined",
        // now user's data is comming from postData object
		const id = postData.id

		const response = await fetch(`http://localhost:3001/users/${id}`, {
			method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
		})
		return await response.json()
    }
);

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
        },
		updateUser(state, { payload }) {
			state.user = payload
		}
    },
	extraReducers: (builder) => {
		builder.addCase(initUser.fulfilled, (state, { payload }) => {
			state.user = payload
		})
		.addCase(initUser.rejected, (state, { payload }) => {
			// if an error occures
		})
	}
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
