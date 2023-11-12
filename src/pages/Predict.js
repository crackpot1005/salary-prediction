import React, { Component } from "react";
import "./Predict.css";
import axios from "axios";
class Predict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 0,
    };
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  handleBodyClick() {
    axios
      .post("https://sohammeher.pythonanywhere.com/predict", {
        experience: parseInt(document.getElementById("experience").value),
        testScore: parseInt(document.getElementById("testScore").value),
        interviewScore: parseInt(
          document.getElementById("interviewScore").value
        ),
      })
      .then((res) => {
        this.setState({ salary: res.data });
        console.log("Response from flask: ", res.data);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="predict">
          <h1 className="h1Class">Welcome to Salary Predictor</h1>
          <form>
            <input type="number" id="experience" placeholder="Experience" />
            <input
              type="number"
              min="0"
              max="10"
              id="testScore"
              placeholder="Test Score (out of 10)"
            />
            <input
              type="number"
              min="0"
              max="10"
              id="interviewScore"
              placeholder="Interview Score (out of 10)"
            />

            <div onClick={this.handleBodyClick} className="coolButton">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </div>
          </form>
        </div>
        <h1>Predicted salary using above values is: ${this.state.salary}</h1>
      </div>
    );
  }
}

export default Predict;
