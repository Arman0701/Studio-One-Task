import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initNewsfeed = createAsyncThunk(
    "newsSlice/initNewsfeed",
    async () => {
        const response = await fetch("http://localhost:3001/newsfeed/");

        return await response.json();
    }
);

export const addPost = createAsyncThunk(
	"newsSlice/addPost",
	async (postData) => {

		const response = await fetch("http://localhost:3001/newsfeed", {
			method: "POST",
			headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
		});

		return await response.json();
	}
)

export const deletePost = createAsyncThunk(
	"newsSlice/deletePost",
	async (postID) => {

		const response = await fetch(`http://localhost:3001/newsfeed/${postID}`, {
			method: "DELETE",
		});

		return await response.json()
	}
)

const newsSlice = createSlice({
    name: "newsSlice",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(initNewsfeed.fulfilled, (state, { payload }) => {
            state.value = payload;
        })
		.addCase(initNewsfeed.rejected, (state, { payload }) => {
			// if an error occured
			alert("Can not initailize newsfeed. Please try later.")
		})
		
		.addCase(addPost.fulfilled, (state, { payload }) => {
			state.value = payload;
		})
		.addCase(addPost.rejected, (state, { payload }) => {
			// if an error occured
			alert("Can not initailize newsfeed. Please try later.")
		})

		.addCase(deletePost.fulfilled, (state, { payload }) => {
			state.value = payload;
		})
		.addCase(deletePost.rejected, (state, { payload }) => {
			// if an error occured
			alert("Can not update the state of newsfeed. Please reload the page.")
		})
    },
});

export default newsSlice.reducer;
