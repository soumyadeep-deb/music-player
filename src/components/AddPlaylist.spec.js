import { render, screen, fireEvent } from "@testing-library/react";
import AddPlaylist from "./AddPlaylist";
import axios from "axios";
jest.mock("axios");
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import '@testing-library/jest-dom'

describe("AddPlaylist rendering", () => {
  test("renders correctly", () => {
    render(
      <Router>
        <AddPlaylist />
      </Router>
    );
    const h1Element = screen.getByTestId("heading-main");
    expect(h1Element).toBeInTheDocument();

    const saveButton = screen.getByRole("button");
    expect(saveButton).toBeInTheDocument();

    const nameInputElement = screen.getByText("Name");
    expect(nameInputElement).toBeInTheDocument();

    const divHeadingElement = screen.getByTestId("div-heading");
    expect(divHeadingElement).toBeInTheDocument();

    const divName = screen.getByTestId("div-name");
    expect(divName).toBeInTheDocument();

    const divButton = screen.getByTestId("div-button");
    expect(divButton).toBeInTheDocument();
  });
});
// describe("Save button functionality", () => {
//   // it("", () => {});
//   const savePlaylist = jest.fn();
//   const {queryByText} = render(<AddPlaylist/>);
//   const button = queryByText("Save");

//   fireEvent.click(button);

//   expect(savePlaylist).toHaveBeenCalledTimes(1);
// });

// describe("AddPlaylist functionality", () => {
//   it("should be able to type in input",() => {
//     render(<AddPlaylist />);
//   })
//   const nameElement = screen.getByTestId("name");
//   fireEvent.change(nameElement, {target: {value: "New Name"}});
//   expect(nameElement.value).toBe("New Name");

// })
