import { configureStore } from "@reduxjs/toolkit";

// import slices
import newsSlice from "./newsSlice";
import userSlice from "./userSlice";
import mainPageSlice from "./mainPageSlice";

export default configureStore({
	reducer: {
		newsSlice,
		userSlice,
		mainPageSlice,
	}
})