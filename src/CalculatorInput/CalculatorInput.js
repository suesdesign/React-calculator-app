import React from "react";

const calculatorInput = props => {
  return (
    <div className="CalculatorInput">
      <p>Calculation: </p>
      <p>{props.calculation}</p>
    </div>
  );
};

export default calculatorInput;
