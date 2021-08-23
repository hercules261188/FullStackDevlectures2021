import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import studentDetailsReducer from "../features/studentDetails/studentDetailsSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    studentDetails: studentDetailsReducer,
  },
});
