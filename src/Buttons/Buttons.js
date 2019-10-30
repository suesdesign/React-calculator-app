import React from "react";

const buttons = props => {
  return (
    <button className="button" onClick={() => alert("click")}>
      {props.value}
    </button>
  );
};

export default buttons;
