import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initNewsfeed = createAsyncThunk(
    "newsSlice/initNewsfeed",
    async () => {
        const response = await fetch("http://localhost:3001/newsfeed/");
        return response.json();
    }
);

const newsSlice = createSlice({
    name: "newsSlice",
    initialState: {
        value: [],
        filters: {
            value: [],
            input: "",
            from: "",
            to: "",
        },
    },
    reducers: {
		filter(state, { payload }) {
			const { value, input, from, to } = payload;

			
		}
    },
    extraReducers: (builder) => {
        builder.addMatcher(initNewsfeed.fulfilled, (state, { payload }) => {
            state.value = payload;
        });
    },
});

export const { filter } = newsSlice.actions;
export default newsSlice.reducer;
