import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import React from "react"

describe("Navbar", () => {
  test("renders correctly", () => {
    render(<Navbar />);
    const divElementOne = screen.getByTestId("div1");
    expect(divElementOne).toBeInTheDocument();

    const divElementTwo = screen.getByTestId("div2");
    expect(divElementTwo).toBeInTheDocument();

    const paragraphElement = screen.getByText("Music Player App");
    expect(paragraphElement).toBeInTheDocument();
  });
});
