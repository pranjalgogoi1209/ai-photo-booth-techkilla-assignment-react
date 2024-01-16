import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CaptureImage, Avatar } from "./pages";
import { Navbar } from "./components";

export default function App() {
  const [capturedImg, setCapturedImg] = useState();
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}

const AppWrapper = styled.div``;
