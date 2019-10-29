import React, { Component } from "react";
import "./App.css";
import { Buttons } from "./Buttons/Buttons";
//import "./CalulatorOutput/CalulatorOutput";

/*class Buttons extends Component {
  render() {
    return <button className="button">{this.props.value}</button>;
  }
}*/

class Calculator extends Component {
  renderButton(i) {
    return <Buttons value={i} />;
  }
  render() {
    return (
      <div class="App">
        <h1>Calculator</h1>
        <div className="Calculator">
          <div className="first-row">
            {this.renderButton("Clear")}
            {this.renderButton("÷")}
          </div>
          <div className="row">
            {this.renderButton(7)}
            {this.renderButton(8)}
            {this.renderButton(9)}
            {this.renderButton("x")}
          </div>
          <div className="row">
            {this.renderButton(4)}
            {this.renderButton(5)}
            {this.renderButton(6)}
            {this.renderButton("-")}
          </div>
          <div className="row">
            {this.renderButton(1)}
            {this.renderButton(2)}
            {this.renderButton(3)}
            {this.renderButton("+")}
          </div>
          <div className="last-row">
            {this.renderButton(0)}
            {this.renderButton(".")}
            {this.renderButton("=")}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
