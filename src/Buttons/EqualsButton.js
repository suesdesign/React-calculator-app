import React from "react";

const equalsButton = props => {
  return (
    <button className="clear button" onClick={props.clicked}>
      {props.value}
    </button>
  );
};

export default equalsButton;
