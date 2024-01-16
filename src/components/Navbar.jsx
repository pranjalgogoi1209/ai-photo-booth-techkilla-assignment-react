import React from "react";
import styled from "styled-components";
import { logo } from "../assets";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
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
  height: 70px;
  .logo {
    border: 1px solid black;
    width: 20vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    color: #212121;
    text-shadow: 0.2vw 0.2vw 0.2vw rgba(33, 33, 33, 0.5);
  }
`;
