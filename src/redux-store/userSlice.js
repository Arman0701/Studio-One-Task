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

export const initUser = createAsyncThunk("userSlice", async (token) => {
    const response = await fetch(
        `http://localhost:3001/users?profile.token=${token}`
    );
    return response.json();
});

export const addPost = createAsyncThunk(
    "userSlice/addPost",
    async (postData, { getState }) => {
        // I tried to get user data using getState function
        // but for some reason it returns "undefined",
		// now user's data is comming from postData object

        const modified = {
            id: generateFakeID(),
            publishedAt: getToday(),
            ...postData,
        };

        
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
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(getUserProfile, (state, { payload }) => {
                state.user = payload;
            })
            .addMatcher(registerUser, (state, { payload }) => {
                state.user = payload;
            })
            .addMatcher(initUser, (state, { payload }) => {
                state.user = payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
