import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk(
	"userSlice/getUserProfile",
	async (userData) => {
		const { username, password } = userData;
		const response = await fetch(`http://localhost:3001/users?profile.username=${username}&profile.password=${password}`);
		return await response.json()
	}
)

const initialState = {
	user: {
		profile: {
			name: "",
			created: "",
			username: "",
			password: "",
			token: null,
		},
		role: "user",
		posts: [],
	},
	// isLoading: false
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        login(state, { payload }) {
			
		},
        logout(state, { payload }) {},
        register(state, { payload }) {},
    },
	extraReducers: (builder => {
		builder.addCase("userSlice/getUserProfile", (state, { payload }) => {
			state.user = {...payload[0]}
		})
	})
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
