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

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="Calculator">
          <CalculatorInput calculation={this.state.calculation} />
          <div className="first-row">
            <InputClear value="Clear" />
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
            <EqualsButton value="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
