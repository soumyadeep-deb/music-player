import { render, screen, waitFor } from "@testing-library/react";
// import { render, waitForElement } from 'react-testing-library'
// import render from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate, // Return an empty jest function to test whether it was called or not...I'm not depending on the results so no need to put in a return value
 }));


test("full App rendering/navigating", async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/List of playlists/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  // await waitFor(() => user.click(screen.getByText(/addPlaylist/i)))
  // await user.click(screen.getByTestId("div-heading"))
  // expect(screen.getByTestId("div-name")).toBeInTheDocument()

  // render(
  //   <Routes>
  //     <Route path="/" element={<PlaylistList/>}/>
  //     <Route/>
  //   </Routes>
  // )
});
test("when user is in index route(/) then render playlist list component", () => {
  const navigate = useNavigate();
  navigate("/");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.getByText(/List of playlists/i)
});

test("when user is in playlists route(/playlists) then render playlist list component", () => {
  const navigate = useNavigate();
  navigate("/playlists");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.getByText(/List of playlists/i)
});

test("when user is in addPlaylist route(/addPlaylist) then render playlist list component", () => {
  const navigate = useNavigate();
  navigate("/addPlaylist");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.getByText(/Create Playlist/i)
});
