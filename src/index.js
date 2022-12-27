import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlaylistList from "./components/PlaylistList";
import AddPlaylist from "./components/AddPlaylist";
import Navbar from "./components/Navbar";
// import {createRoot} from 'react-dom/client'

// const root = React.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PlaylistList />}></Route>
        <Route index element={<PlaylistList />}></Route>
        <Route path="/playlists" element={<PlaylistList />}></Route>
        <Route path="/addPlaylist" element={<AddPlaylist />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { FlagsmithProvider } from "flagsmith-react";
// import {featureToggles} from './config/env-config'

// ReactDOM.render(<FlagsmithProvider environmentId={featureToggles.environmentId}>
//   <App />
// </FlagsmithProvider>, document.getElementById('root')
// );
