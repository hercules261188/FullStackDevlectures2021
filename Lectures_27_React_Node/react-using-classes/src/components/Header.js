import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Header(props) {
  const [studentName, updateStudentName] = useState("John");
  const [userDetails, updateUserDetails] = useState({});
  function fetchUserDetails() {
    axios
      .get("https://randomuser.me/api/")
      .then(function (response) {
        // handle success
        console.log(response);
        updateUserDetails(response.data.results[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(() => {
    // fetchUserDetails();
  }, []);
  function handleStudentNameChange() {
    updateStudentName("Jimmy");
  }
  if (Object.keys(userDetails).length > 0) {
    return (
      <div>
        <h1> Functional Code</h1>
        <div>Student Name: {studentName}</div>
        <div>
          Username: {userDetails.name.first} {userDetails.name.last}
        </div>
        <button onClick={handleStudentNameChange}>Change student name</button>
      </div>
    );
  } else {
    return (
      <div>
        Functional Code
        <div>
          <h1>Site title: {props.siteTitle}</h1>
        </div>
      </div>
    );
  }
}
