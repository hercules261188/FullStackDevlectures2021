import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  counterTitle,
  updateCounterTitle,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const pageTitle = useSelector(counterTitle);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>{pageTitle}</h2>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement Counter
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment counter
        </button>
      </div>
      <button
        className={styles.button}
        aria-label="change site title"
        onClick={() => dispatch(updateCounterTitle())}
      >
        Update page title
      </button>
    </div>
  );
}
