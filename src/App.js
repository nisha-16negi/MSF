import { useState } from "react";
import "./App.css";
import { MultiStepsProgressBar } from "./Components/MultiStepsProgressBar/MultiStepsProgressBar";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import OurServices from "./Components/OurServices/OurServices";
import ProjectBudget from "./Components/ProjectBudget/ProjectBudget";
import QuoteSubmit from "./Components/QuoteSubmit/QuoteSubmit";

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    localStorage.clear();
    alert("Form submitted!");
    setStep(1);
  };
  return (
    <div className="p-container">
      <div className="App">
        <header className="App-header">
          <h1>Get a project quote</h1>
          <span data-testid="app-header-span">
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </span>
        </header>
        <div className="app-section">
          <div className="app-sub-container">
            <div className="progress-bar">
              <MultiStepsProgressBar step={step} />
            </div>
            <div className="form-container">
              {step === 1 && <ContactDetails onNext={handleNext} />}
              {step === 2 && (
                <OurServices onPrevious={handlePrevious} onNext={handleNext} />
              )}
              {step === 3 && (
                <ProjectBudget
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              )}
              {step === 4 && (
                <QuoteSubmit
                  onPrevious={handlePrevious}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
