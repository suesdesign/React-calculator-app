import React from "react";

const buttons = props => {
  return (
    <button className="button" onClick={props.clicked}>
      {props.value}
    </button>
  );
};

export default buttons;
