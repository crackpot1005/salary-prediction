import React, { Component } from "react";
import "./Predict.css";
import APIService from "./APIService.js";
import axios from "axios";
class Predict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 0,
    };
  }
  submit = (e) => {
    e.preventDefault();
    // APIService.postPredict({
    //   experience: document.getElementById("experience").value,
    //   testScore: document.getElementById("testScore").value,
    //   interviewScore: document.getElementById("interviewScore").value,
    // })
    //   .then((response) => console.log("got response"))
    //   .catch((error) => console.log("error", error));
    axios
      .post("http://localhost:5000/predict", {
        experience: document.getElementById("experience").value,
        testScore: document.getElementById("testScore").value,
        interviewScore: document.getElementById("interviewScore").value,
      })
      .then((res) => {
        this.setState({ salary: res.data });
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <div className="predict">
          <form onSubmit={this.submit}>
            <input id="experience" placeholder="Experience" />
            <input id="testScore" placeholder="Test Score" />
            <input id="interviewScore" placeholder="Interview Score" />
            <button type="submit" id="submit-button">
              Submit
            </button>
          </form>
        </div>
        <h1>Predicted salary of using above values is: ${this.state.salary}</h1>
      </div>
    );
  }
}

export default Predict;
