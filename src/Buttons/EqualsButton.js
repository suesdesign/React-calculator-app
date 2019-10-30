import React from "react";

const equalsButton = props => {
  return (
    <button className="clear button" onClick={() => alert("click")}>
      {props.value}
    </button>
  );
};

export default equalsButton;
