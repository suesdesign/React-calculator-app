import React from "react";

const inputClear = props => {
  return (
    <button className="clear button" onClick={() => alert("click")}>
      {props.value}
    </button>
  );
};

export default inputClear;
