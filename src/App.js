import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons/Buttons";
import InputClear from "./Buttons/InputClear";
import EqualsButton from "./Buttons/EqualsButton";

import CalculatorInput from "./CalculatorInput/CalculatorInput";

class App extends Component {
  state = {
    calculation: "hello"
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="Calculator">
          <CalculatorInput calculation={this.state.calculation} />
          <div className="first-row">
            <InputClear value="Clear" />
            <Buttons value="÷" />
          </div>
          <div className="row">
            <Buttons value="7" />
            <Buttons value="8" />
            <Buttons value="9" />
            <Buttons value="x" />
          </div>
          <div className="row">
            <Buttons value="4" />
            <Buttons value="5" />
            <Buttons value="6" />
            <Buttons value="-" />
          </div>
          <div className="row">
            <Buttons value="1" />
            <Buttons value="2" />
            <Buttons value="3" />
            <Buttons value="+" />
          </div>
          <div className="last-row">
            <Buttons value="0" />
            <Buttons value="." />
            <EqualsButton value="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
