import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import StudentDetails from "./features/studentDetails/studentDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <StudentDetails />
      </header>
    </div>
  );
}

export default App;
