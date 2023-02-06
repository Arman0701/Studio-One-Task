import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
	name: "newsSlice",
	initialState: {
		value: []
	},
	reducers: {
		addPost(state, {payload}) {},
		removePost(state, {payload}) {},
	}
})

export const { addPost, removePost} = newsSlice.actions;
export default newsSlice.reducer;