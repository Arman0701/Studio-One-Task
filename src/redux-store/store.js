import { configureStore } from "@reduxjs/toolkit";

// import slices
import newsSlice from "./newsSlice";
import userSlice from "./userSlice";

export default configureStore({
	reducer: {
		newsSlice,
		userSlice,
	}
})