import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { MultiStepsProgressBar } from "./Components/MultiStepsProgressBar/MultiStepsProgressBar";
import OurServices from "./Components/OurServices/OurServices";
import ProjectBudget from "./Components/ProjectBudget/ProjectBudget";
import QuoteSubmit from "./Components/QuoteSubmit/QuoteSubmit";

describe("renders Multi steps Form App", () => {
  test("renders Multi Steps Form App header", async () => {
    const { container } = render(
      <>
        <App />
        <MultiStepsProgressBar step={jest.fn()} />
      </>
    );
    expect(container).toBeInTheDocument();

    const appHeader = screen.getByText("Get a project quote");
    expect(appHeader).toBeInTheDocument();

    const appSpan = screen.getByTestId("app-header-span");
    expect(appSpan).toBeInTheDocument();
  });

  test("renders Multi Steps Form App Contact Details component", async () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();

    const contactDetailsHeader = screen.getByText("Contact details");
    expect(contactDetailsHeader).toBeInTheDocument();

    const contactDetailsSpan = screen.getByText(
      "Lorem ipsum dolor sit amet consectetur adipisc."
    );
    expect(contactDetailsSpan).toBeInTheDocument();

    const name = screen.getByTestId("name");
    fireEvent.change(name, { target: { value: "username" } });

    const email = screen.getByTestId("email");
    fireEvent.change(email, { target: { value: "username@gmail.com" } });

    const phoneNumber = screen.getByTestId("phone-num");
    fireEvent.change(phoneNumber, { target: { value: "1010101010" } });

    const companyName = screen.getByTestId("name");
    fireEvent.change(companyName, { target: { value: "Enterprise" } });

    const nextBtn = screen.getByRole("button");
    expect(nextBtn).toBeInTheDocument();
    fireEvent.click(nextBtn);
  });

  test("renders Multi Steps Form App Our Services component", async () => {
    const { container } = render(
      <>
        <App />
        <OurServices onPrevious={jest.fn()} onNext={jest.fn()} />
      </>
    );
    expect(container).toBeInTheDocument();

    const servicesHeader = screen.getByText("Our services");
    expect(servicesHeader).toBeInTheDocument();

    const servicesSpan = screen.getByText(
      "Please select which service you are interested in."
    );
    expect(servicesSpan).toBeInTheDocument();

    const devService = screen.getByTestId("dev-service");
    fireEvent.click(devService);

    const webService = screen.getByTestId("web-service");
    fireEvent.click(webService);

    const marketingService = screen.getByTestId("marketing-service");
    fireEvent.click(marketingService);

    const otherService = screen.getByTestId("other-service");
    fireEvent.click(otherService);

    const prevBtn = screen.getAllByText("Previous Step")[0];
    expect(prevBtn).toBeInTheDocument();
    fireEvent.click(prevBtn);

    const nextBtn = screen.getAllByText("Next Step")[1];
    expect(nextBtn).toBeInTheDocument();
    fireEvent.click(nextBtn);
  });

  test("renders Multi Steps Form App Project Budget component", async () => {
    const { container } = render(
      <>
        <App />
        <ProjectBudget onPrevious={jest.fn()} onNext={jest.fn()} />
      </>
    );
    expect(container).toBeInTheDocument();

    const budgetHeader = screen.getByText("What's your project budget?");
    expect(budgetHeader).toBeInTheDocument();

    const budgetSpan = screen.getByText(
      "Please select the project budget range you have in mind."
    );
    expect(budgetSpan).toBeInTheDocument();

    const firstOption = screen.getByTestId("option-1");
    fireEvent.click(firstOption);

    const secOption = screen.getByTestId("option-2");
    fireEvent.click(secOption);

    const thirdOption = screen.getByTestId("option-3");
    fireEvent.click(thirdOption);

    const forthOption = screen.getByTestId("option-4");
    fireEvent.click(forthOption);

    const prevBtn = screen.getAllByText("Previous Step")[0];
    expect(prevBtn).toBeInTheDocument();
    fireEvent.click(prevBtn);

    const nextBtn = screen.getAllByText("Next Step")[1];
    expect(nextBtn).toBeInTheDocument();
    fireEvent.click(nextBtn);
  });

  test("renders Multi Steps Form App Quote Submit component", async () => {
    const { container } = render(
      <>
        <App />
        <QuoteSubmit onSubmit={jest.fn()} />
      </>
    );
    expect(container).toBeInTheDocument();

    const submitHeader = screen.getByText("Submit your quote request");
    expect(submitHeader).toBeInTheDocument();

    const submitSpan = screen.getByText(
      "Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours."
    );
    expect(submitSpan).toBeInTheDocument();

    const submitBtn = screen.getByText("Submit");
    expect(submitBtn).toBeInTheDocument();
    fireEvent.click(submitBtn);
  });
});
