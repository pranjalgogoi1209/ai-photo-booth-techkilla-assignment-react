import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CaptureImage, Avatar } from "./pages";
import { Navbar } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/capture-image"} element={<CaptureImage />} />
        <Route path={"/avatar"} element={<Avatar />} />
      </Routes>
    </BrowserRouter>
  );
}
