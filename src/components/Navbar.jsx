import React from "react";
import styled from "styled-components";
import { logo } from "../assets";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="title">
        <h1>AI Photo Booth</h1>
      </div>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    border: 1px solid black;
    width: 20vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
