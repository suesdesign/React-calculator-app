import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons/Buttons";
import InputClear from "./Buttons/InputClear";
import EqualsButton from "./Buttons/EqualsButton";

import CalculatorInput from "./CalculatorInput/CalculatorInput";

class App extends Component {
  state = {
    calculation: ""
  };

  clickHandler = event => {
    const pressedButton = event.target.innerHTML;
    console.log(pressedButton);
    let calc = this.state.calculation;
    calc += pressedButton;
    this.setState({ calculation: calc });
    console.log(calc);
  };

  equalsClickHandler = calculation => {
    calculation = this.state.calculation;
    calculation = calculation.replace(/x/, "*");
    calculation = calculation.replace(/÷/, "/");
    let equals = eval(calculation);
    this.setState({ calculation: equals });
  };

  clearClickHandler = () => {
    this.setState({ calculation: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="Calculator">
          <CalculatorInput
            calculation={
              this.state.calculation === "" ? "0" : this.state.calculation
            }
          />
          <div className="first-row">
            <InputClear value="Clear" clicked={this.clearClickHandler} />
            <Buttons value="÷" clicked={this.clickHandler} />
          </div>
          <div className="row">
            <Buttons value="7" clicked={this.clickHandler} />
            <Buttons value="8" clicked={this.clickHandler} />
            <Buttons value="9" clicked={this.clickHandler} />
            <Buttons value="x" clicked={this.clickHandler} />
          </div>
          <div className="row">
            <Buttons value="4" clicked={this.clickHandler} />
            <Buttons value="5" clicked={this.clickHandler} />
            <Buttons value="6" clicked={this.clickHandler} />
            <Buttons value="-" clicked={this.clickHandler} />
          </div>
          <div className="row">
            <Buttons value="1" clicked={this.clickHandler} />
            <Buttons value="2" clicked={this.clickHandler} />
            <Buttons value="3" clicked={this.clickHandler} />
            <Buttons value="+" clicked={this.clickHandler} />
          </div>
          <div className="last-row">
            <Buttons value="0" clicked={this.clickHandler} />
            <Buttons value="." clicked={this.clickHandler} />
            <EqualsButton value="=" clicked={this.equalsClickHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
