import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  studentDetails,
  updateFirstName,
  updateLastName,
} from "./studentDetailsSlice";

export default function StudentDetails() {
  const studentDetailsData = useSelector(studentDetails);
  const dispatch = useDispatch();

  console.log("studentDetailsData", studentDetailsData);
  return (
    <div>
      <h2>Student Details</h2>
      <div>First Name:{studentDetailsData.firstName}</div>
      <div>Last Name:{studentDetailsData.lastName}</div>

      <button
        aria-label="change first name"
        onClick={() => dispatch(updateFirstName())}
      >
        Update firstName
      </button>
      <button
        aria-label="change first name"
        onClick={() => dispatch(updateLastName())}
      >
        Update last Name
      </button>
    </div>
  );
}
