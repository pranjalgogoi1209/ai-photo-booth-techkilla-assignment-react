import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  superHero1,
  superHero2,
  superHero3,
  superHero4,
  superHero5,
  superHero6,
  superHero7,
  superHero8,
  superHero9,
  superHero10,
} from "../assets";

export default function Home() {
  const superHeros = [
    superHero1,
    superHero2,
    superHero3,
    superHero4,
    superHero5,
    superHero6,
    superHero7,
    superHero8,
    superHero9,
    superHero10,
  ];
  const handleMouseOut = e => {
    e.target.setAttribute("style", "transform: rotate(-15deg)");
    setTimeout(() => {
      e.target.setAttribute("style", "transform: rotate(0deg)");
      e.target.setAttribute("style", "");
    }, 300);
  };
  return (
    <HomeWrapper>
      <div className="Home">
        <Link to={"/capture-image"}>
          <button>Start Now</button>
        </Link>

        <main className="images-container">
          {superHeros &&
            superHeros.map(superHero => (
              <div className="superhero-container">
                <img
                  src={superHero}
                  key={superHero}
                  onMouseOut={e => handleMouseOut(e)}
                />
                <div className="design"></div>
              </div>
            ))}
        </main>
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  .Home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: calc(100vh - 120px);
    .images-container {
      border: 1px solid black;
      display: flex;
      justify-content: center;
      gap: 2vw;
      padding: 1vw;
      flex-wrap: wrap;
      img {
        position: relative;
        width: 12vw;
        height: 28vh;
        cursor: pointer;
        border-radius: 50%;
        border: 0.3vw solid rgba(33, 33, 33, 0.9);
        z-index: 1000;
        transition: all ease 0.5s;
        &:hover {
          transform: rotate(20deg);
        }
      }
    }
    .superhero-container {
      position: relative;
      .design {
        background-color: rgba(33, 33, 33, 0.6);
        position: absolute;
        top: 0.5vw;
        left: 0vw;
        width: 10vw;
        height: 4vh;
        z-index: 0;
        transform: rotate(-10deg);
      }
    }
    a {
      width: 13.6vw;
      margin: 0 auto 0 auto;
      border-radius: 2vw;

      button {
        transition: box-shadow ease 0.3s;
        box-shadow: 0 0 0.7vw rgba(33, 33, 33, 0.7);
        position: relative;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          left: -10px;
          top: 0;
          width: 7px;
          height: 100%;
          background-color: #f1f1f1;
          transition: all ease 0.8s;
        }
        &:hover::after {
          left: 100%;
          right: 0;
        }
      }
    }
  }
`;
