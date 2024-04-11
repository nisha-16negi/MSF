import { useEffect, useState } from "react";
import "../ProjectBudget/ProjectBudget.css";
import PrevButton from "../Button/PrevButton";
import NextButton from "../Button/NextButton";

import React from "react";

const ProjectBudget = (props) => {
  const [isChecked, setIsChecked] = useState(null);

  const handleCheckboxClick = (selectedBudget) => {
    setIsChecked(selectedBudget);
    localStorage.setItem('selectedBudget',selectedBudget)
  };

  useEffect(()=>{
    const storedBudget = localStorage.getItem('selectedBudget');
    if(storedBudget){
      setIsChecked(storedBudget);
    }
  },[])

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
                isChecked === "budget1" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("budget1")}
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
                isChecked === "budget2" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("budget2")}
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
                isChecked === "budget3" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("budget3")}
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
                isChecked === "budget4" ? "-checked" : ""
              }`}
              onClick={() => handleCheckboxClick("budget4")}
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
