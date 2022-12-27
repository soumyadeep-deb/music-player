import PlaylistList from "./PlaylistList";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

describe("PlaylistList rendering", () => {
  test("renders correctly", () => {
    render(
      <Router>
        <PlaylistList />
      </Router>
    );
    const h1Element = screen.getByTestId("main-heading");
    expect(h1Element).toBeInTheDocument();

    const nameHeading = screen.getByTestId("name-heading");
    expect(nameHeading).toBeInTheDocument();

    const songsHeading = screen.getByTestId("songs-heading");
    expect(songsHeading).toBeInTheDocument();

    const actionsHeading = screen.getByTestId("actions-heading");
    expect(actionsHeading).toBeInTheDocument();

    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });
});
