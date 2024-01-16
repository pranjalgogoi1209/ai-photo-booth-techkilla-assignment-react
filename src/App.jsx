import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CaptureImage, Avatar } from "./pages";
import { Navbar } from "./components";

export default function App() {
  const [capturedImg, setCapturedImg] = useState();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/capture-image"}
          element={<CaptureImage setCapturedImg={setCapturedImg} />}
        />
        <Route
          path={"/avatar"}
          element={<Avatar capturedImg={capturedImg} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
