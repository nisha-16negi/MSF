import { useState } from "react";
import "../ProjectBudget/ProjectBudget.css";
import PrevButton from "../Button/PrevButton";
import NextButton from "../Button/NextButton";

import React from "react";

const ProjectBudget = (props) => {
  const [isChecked, setIsChecked] = useState(null);

  const handleCheckboxClick = (checkbox) => {
    setIsChecked(checkbox === isChecked ? null : checkbox);
  };
  return (
    <>
      <div className="project-budget-container">
        <h1>What's your project budget?</h1>
        <div className="budget-para">
          Please select the project budget range you have in mind.
        </div>
        <div className="budget-sub-container">
          <div className="project-budget">
            <div
              data-testid="option-1"
              className={`budget-container${
                isChecked === "checkbox1" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("checkbox1")}
            >
              <div
                className={`checkbox${
                  isChecked === "checkbox1" ? "-checked" : ""
                }`}
              >
                {isChecked === "checkbox1" ? (
                  <div className="checkbox-filled"></div>
                ) : null}
              </div>
              <span className="budgets">Rs.5.000 - Rs.10.000</span>
            </div>
            <div
              data-testid="option-2"
              className={`budget-container${
                isChecked === "checkbox2" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("checkbox2")}
            >
              <div
                className={`checkbox${
                  isChecked === "checkbox2" ? "-checked" : ""
                }`}
              >
                {" "}
                {isChecked === "checkbox2" ? (
                  <div className="checkbox-filled"></div>
                ) : null}
              </div>
              <span className="budgets">Rs.10.000 - Rs.20.000</span>
            </div>
          </div>
          <div className="project-budget">
            <div
              data-testid="option-3"
              className={`budget-container${
                isChecked === "checkbox3" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("checkbox3")}
            >
              <div
                className={`checkbox${
                  isChecked === "checkbox3" ? "-checked" : ""
                }`}
              >
                {isChecked === "checkbox3" ? (
                  <div className="checkbox-filled"></div>
                ) : null}
              </div>
              <span className="budgets">Rs.20.000 - Rs.50.000</span>
            </div>
            <div
              data-testid="option-4"
              className={`budget-container${
                isChecked === "checkbox4" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("checkbox4")}
            >
              <div
                className={`checkbox${
                  isChecked === "checkbox4" ? "-checked" : ""
                }`}
              >
                {isChecked === "checkbox4" ? (
                  <div className="checkbox-filled"></div>
                ) : null}
              </div>
              <span className="budgets">Rs.50.000 +</span>
            </div>
          </div>
        </div>
      </div>
      <div className="budget-btn">
        <PrevButton onPrevious={props.onPrevious} />
        <NextButton onNext={props.onNext} />
      </div>
    </>
  );
};

export default ProjectBudget;
