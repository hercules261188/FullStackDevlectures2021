import React from "react";
// import { reducer, storeObject } from "../reducers/CounterReducer";

export default function MultiplyCounter(props) {
  //   const [state, dispatch] = useReducer(reducer, storeObject);
  function handleMultiplicationByTwo() {
    props.dispatch({ type: "multiplyByTwo" });
  }
  console.log("state", props.state);
  return (
    <div>
      <div>
        <button onClick={() => handleMultiplicationByTwo()}>
          Multiply by 2
        </button>
      </div>
    </div>
  );
}
