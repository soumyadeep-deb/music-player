import "./App.css";
import Navbar from "./components/Navbar";
import AddPlaylist from "./components/AddPlaylist";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlaylistList from "./components/PlaylistList";

function App() {
  return (
    <>

        <Navbar />
        <Routes>
          <Route path="/" element={<PlaylistList />}></Route>
          <Route index element={<PlaylistList />}></Route>
          <Route path="/playlists" element={<PlaylistList />}></Route>
          <Route path="/addPlaylist" element={<AddPlaylist />}></Route>
        </Routes>
      
    </>
  );
}

export default App;
