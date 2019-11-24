import React from "react";

const inputClear = props => {
  return (
    <button className="clear button" onClick={props.clicked}>
      {props.value}
    </button>
  );
};

export default inputClear;
