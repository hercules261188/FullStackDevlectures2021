import React from "react";
import axios from "axios";
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { studentName: "John", userDetails: {} };
  }
  fetchUserDetails() {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({ userDetails: response.data.results[0] });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  componentDidMount() {
    // this.fetchUserDetails();
  }
  handleStudentNameChange() {
    this.setState({ studentName: "Jimmy" });
  }
  render() {
    console.log("userDetails", this.state.userDetails);
    if (Object.keys(this.state.userDetails).length > 0) {
      return (
        <div>
          <h1> Classes based Code</h1>
          <div>Student Name: {this.state.studentName}</div>
          <button onClick={() => this.handleStudentNameChange()}>
            Change student name
          </button>
          <div>
            Username: {this.state.userDetails.name.first}{" "}
            {this.state.userDetails.name.last}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Class based Code
          <div>
            <h1>Site Title: {this.props.siteTitle}</h1>
          </div>
        </div>
      );
    }
  }
}
