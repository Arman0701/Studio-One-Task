import { configureStore } from "@reduxjs/toolkit";

// import slices
import newsSlice from "./newsSlice";

export default configureStore({
	reducer: {
		newsSlice,
	}
})