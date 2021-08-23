// Step 1: initial state object
export const initialState = {
  firstName: "",
  lastName: "",
};

// Step 2:name update reducer
export function nameUpdateReducer(state, action) {
  console.log("action", action);
  switch (action.type) {
    case "updateFirstName":
      return Object.assign({}, state, { firstName: action.firstName });

    case "updateLastName":
      return Object.assign({}, state, { lastName: action.lastName });

    default:
      return state;
  }
}
