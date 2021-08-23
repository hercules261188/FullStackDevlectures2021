import { useReducer } from "react";
import { reducer, storeObject } from "../reducers/CounterReducer";
import MultiplyCounter from "./MultiplyCounter";
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, storeObject);
  //   const [counter, updateCounter] = useState(0);
  function handleIncrement() {
    dispatch({ type: "increment" });
  }
  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  function handleChangeInTitle() {
    dispatch({ type: "changeInTitle" });
  }
  console.log("state", state);
  return (
    <div>
      <h3>{state.name}</h3>
      <div>Current value of counter: {state.count}</div>
      <div>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
        <MultiplyCounter state={state} dispatch={dispatch} />
      </div>
      <div>
        <button onClick={() => handleChangeInTitle()}>Change title</button>
      </div>
    </div>
  );
}
