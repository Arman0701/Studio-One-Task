import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initNewsfeed = createAsyncThunk(
	"newsSlice/initNewsfeed",
	async () => {
		const response = await fetch("http://localhost:3001/newsfeed/")
		return response.json()
	}
);

const newsSlice = createSlice({
	name: "newsSlice",
	initialState: {
		value: []
	},
	reducers: {
		addPost(state, {payload}) {},
		removePost(state, {payload}) {},
	},
	extraReducers: (builder) => {
		builder.addMatcher(initNewsfeed.fulfilled, (state, { payload }) => {
			state.value = payload
		})
	}
})

export const { addPost, removePost} = newsSlice.actions;
export default newsSlice.reducer;