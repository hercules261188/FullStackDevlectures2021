// 1. Create a slice with intial state, reducer and actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
};

export const studentDetailsSlice = createSlice({
  name: "studentDetails",
  initialState,
  reducers: {
    updateFirstName: (state) => {
      state.firstName = "John";
    },
    updateLastName: (state) => {
      state.lastName = "Doe";
    },
  },
});

export const { updateFirstName, updateLastName } = studentDetailsSlice.actions;

export const studentDetails = (state) => state.studentDetails;

export default studentDetailsSlice.reducer;
