import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons/Buttons";
import InputClear from "./Buttons/InputClear";
import EqualsButton from "./Buttons/EqualsButton";

import CalculatorInput from "./CalculatorInput/CalculatorInput";

class App extends Component {
  state = {
    input: 0
  };
  renderButton(i) {
    return <Buttons value={i} />;
  }
  render() {
    return (
      <div class="App">
        <h1>Calculator</h1>
        <div className="Calculator">
          <CalculatorInput calculation={this.state.input} />
          <div className="first-row">
            <InputClear value="Clear" />
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
            <EqualsButton value="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
