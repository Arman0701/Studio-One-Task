import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initMainPage = createAsyncThunk(
    "mainPageSlice/initMainPage",
    async () => {
        const response = await fetch(
            // "https://jsonplaceholder.typicode.com/posts"
            "http://localhost:3001/newsfeed/"
        );

        return await response.json();
    }
);

const mainPageSlice = createSlice({
    name: "mainPageSlice",
    initialState: {
        value: [],
        onePage: [],
        page: 1,
        limit: 0,
        lastPage: null,
        loading: false,
        error: null,
    },
    reducers: {
        setPaginationLimit(state, { payload }) {
            state.limit = payload;
            state.onePage = state.value.slice(0, payload);

            state.lastPage = Math.floor(state.value.length / payload);
            if (state.value.length % payload > 0) {
                state.lastPage += 1;
            }
        },
        getPrevPage(state) {
            if (state.page > 1) {
                state.page -= 1;
                state.onePage = state.value.slice(
                    state.page * state.limit - state.limit,
                    state.page * state.limit
                );
            }
        },
        getNextPage(state) {
            if (state.page < state.lastPage) {
                state.onePage = state.value.slice(
                    state.page * state.limit,
                    state.page * state.limit + state.limit
                );
                state.page += 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initMainPage.fulfilled, (state, { payload }) => {
                state.value = payload;
            })
            .addCase(initMainPage.pending, (state) => {
                state.loading = true;
            })
            .addCase(initMainPage.rejected, (state, { payload }) => {
                state.error = payload;
                state.loading = false;
            });
    },
});

export const { getNextPage, getPrevPage, setPaginationLimit } =
    mainPageSlice.actions;

export default mainPageSlice.reducer;
