import React from "react";
import '../Button/Button.css';

const NextButton = (props) => {
  return (
    <button className="next-btn" onClick={props.onNext}>
      Next Step
    </button>
  );
};

export default NextButton;
