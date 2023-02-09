import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import helpers
import generateFakeID from "../helpers/generateFakeID";
import getToday from "../helpers/getToday";

export const initNewsfeed = createAsyncThunk(
    "newsSlice/initNewsfeed",
    async () => {
        const response = await fetch("http://localhost:3001/newsfeed/");
        return response.json();
    }
);

export const addPost = createAsyncThunk(
	"newsSlice/addPost",
	async (postData) => {

		console.log("newsfeed modified ::: ", postData)
		
		const response = await fetch("http://localhost:3001/newsfeed", {
			method: "POST",
			headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
		});

		return response.json();
	}
)

const newsSlice = createSlice({
    name: "newsSlice",
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addMatcher(initNewsfeed.fulfilled, (state, { payload }) => {
            state.value = payload;
        })
		.addMatcher(addPost.fulfilled, (state, { payload }) => {
			state.value = payload;
		})
    },
});

export default newsSlice.reducer;
