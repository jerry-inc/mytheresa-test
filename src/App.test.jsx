import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App tests", () => {
  it("should contains the hello text", () => {
    render(<App />);
    const heading = screen.getByText(/Hello React/i);
    expect(heading).toBeInTheDocument();
  });
});
