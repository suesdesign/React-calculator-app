import React from "react";

const clickHandler = event => {
  const pressedButton = event.target.innerHTML;
  console.log(pressedButton);
};

const buttons = props => {
  return (
    <button className="button" onClick={e => clickHandler(e)}>
      {props.value}
    </button>
  );
};

export default buttons;
