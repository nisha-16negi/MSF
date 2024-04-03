import React from "react";
import '../Button/Button.css';

const PrevButton = (props) => {
  return (
    <button className="prev-btn" onClick={props.onPrevious}>
      Previous Step
    </button>
  );
};

export default PrevButton;
