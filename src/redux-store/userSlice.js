import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        name: "Arman Tadevosyan",
        created: "06.02.2023",
        profileImage: null,
        username: "arman_111",
        password: "Arman123",
        token: null,
    },
    role: "user",
    posts: [],
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        login(state, { payload }) {},
        logout(state, { payload }) {},
        register(state, { payload }) {},
    },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
