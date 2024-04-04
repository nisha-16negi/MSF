import PrevButton from "../Button/PrevButton";
import SubmitButton from "../Button/SubmitButton";
import "../QuoteSubmit/QuoteSubmit.css";
import { HiCheckCircle } from "react-icons/hi2";

import React from "react";

const QuoteSubmit = (props) => {
  return (
    <>
      <div className="quote-submit-container">
        <div className="submit-icon">
          <HiCheckCircle color="#4A3AFF" className="quote-submit" />
        </div>
        <div className="quote-sub-container">
          <h1>Submit your quote request</h1>
          <span>
            Please review all the information you previously typed in the past
            steps, and if all is okay, submit your message to receive a project
            quote in 24 - 48 hours.
          </span>
        </div>
      </div>
      <div className="quote-submit-btn">
        <PrevButton onPrevious={props.onPrevious} />
        <SubmitButton onSubmit={props.onSubmit} />
      </div>
    </>
  );
};

export default QuoteSubmit;
