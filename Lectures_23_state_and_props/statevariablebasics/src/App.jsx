// Step 1: Import the hook from react library
import React, {useState} from 'react'
import './App.css'

function App() {
  // useState hook usage example
  // first param: variable
  // second param: function to update the variable
  // rhs: Param passed to the useState hook is initial value of the variable
  const [counter, setCount] = useState(0);
  const [studentName, setStudentName] = useState("");
  function clickHander() {
    console.log("button clicked");
    // incrementing the state variable
    setCount(counter+1);
  }
  function inputTextChangeHandler(e) {
    setStudentName(e.target.value);
  }
  return (
    <div className="App">
      <h2>Counter example</h2>
      <button onClick={clickHander}>Increment Count</button>
      <div>
        The current value of count is: {counter}
      </div>
      <hr />
      <div>
        <label htmlFor="studentName">Enter student name:</label>
        <input 
        type="text" 
        id="studentName" 
        placeholder="Enter student name"
        onChange={inputTextChangeHandler}
        value={studentName}
        />
        <div>
        {/* <button onClick={() => {setStudentName("James")}}>Change Name</button> */}
        <div>The current value of studentName state variable is: {studentName}</div>
        </div>
      </div>
    </div>
  )
}

export default App
