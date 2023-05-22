import { configureStore } from "@reduxjs/toolkit";
import langReducer from "../slices/langReducer";

export default configureStore({
  reducer: {
    lang: langReducer,
  },
});
