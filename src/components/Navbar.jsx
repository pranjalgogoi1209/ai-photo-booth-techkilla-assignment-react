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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5vw;
  .logo {
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

  /* fot tablets */
  @media screen and (max-width: 991px) {
    height: 9.5vw;
    .logo {
      width: 34vw;
    }
    .title {
      h1 {
        font-size: 4.6vw;
        color: #212121;
        text-shadow: 0.2vw 0.2vw 0.2vw rgba(33, 33, 33, 0.5);
      }
    }
  }

  /* for phones */
  @media screen and (max-width: 767px) {
    height: 10.5vw;
    .logo {
      width: 35vw;
    }
    .title {
      h1 {
        font-size: 5vw;
        color: #212121;
        text-shadow: 0.2vw 0.2vw 0.2vw rgba(33, 33, 33, 0.5);
      }
    }
  }
`;
