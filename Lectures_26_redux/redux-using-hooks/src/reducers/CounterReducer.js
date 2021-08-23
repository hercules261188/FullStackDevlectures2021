import { useReducer } from "react";
export const storeObject = { count: 0, name: "Currency counter" };

export function reducer(state, action) {
  console.log("action.type", action.type);
  switch (action.type) {
    case "increment":
      return Object.assign({}, state, { count: state.count + 1 });

    case "decrement":
      return Object.assign({}, state, { count: state.count - 1 });

    case "multiplyByTwo":
      return Object.assign({}, state, { count: state.count + 2 });

    case "changeInTitle":
      return Object.assign({}, state, { name: "Meter Counter" });

    default:
      throw new Error();
  }
}
