// Step 5: Import useReducer hook
import React, { useReducer } from "react";
//Step 4: Import initial state and reducer
import { initialState, nameUpdateReducer } from "../reducers/StudentDetails";
export default function GetStudentDetails() {
  // Step 6: Creation of state and dispatch variable
  const [state, dispatch] = useReducer(nameUpdateReducer, initialState);
  console.log("state", state);
  function updateFirstName(firstName) {
    dispatch({ type: "updateFirstName", firstName: firstName });
  }
  function updateLastName(lastName) {
    dispatch({ type: "updateLastName", lastName: lastName });
  }
  return (
    <div>
      <h2> Get student details</h2>
      <h4>
        First Name: {state.firstName} {state.lastName}
      </h4>
      <div>
        <label htmlFor="firstname">Enter first Name</label>
        <input type="text" onChange={(e) => updateFirstName(e.target.value)} />
        <input type="text" onChange={(e) => updateLastName(e.target.value)} />
      </div>
    </div>
  );
}
