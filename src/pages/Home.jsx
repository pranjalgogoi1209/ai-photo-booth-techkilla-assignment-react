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
  const superHeros1 = [superHero1, superHero2, superHero3];
  const superHeros2 = [superHero4, superHero5, superHero6, superHero7];
  const superHeros3 = [superHero8, superHero9, superHero10];

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
        <main>
          <div className="superHeros1">
            {superHeros1 &&
              superHeros1.map((superHero, index) => (
                <div className="superhero-container">
                  <img
                    src={superHero}
                    key={index}
                    onMouseOut={e => handleMouseOut(e)}
                  />
                  <div className="design"></div>
                </div>
              ))}
          </div>
          <div className="superHeros2">
            {superHeros2 &&
              superHeros2.map((superHero, index) => (
                <div className="superhero-container">
                  <img
                    src={superHero}
                    key={index}
                    onMouseOut={e => handleMouseOut(e)}
                  />
                  <div className="design"></div>
                </div>
              ))}
          </div>
          <div className="superHeros3">
            {superHeros3 &&
              superHeros3.map((superHero, index) => (
                <div className="superhero-container">
                  <img
                    src={superHero}
                    key={index}
                    onMouseOut={e => handleMouseOut(e)}
                  />
                  <div className="design"></div>
                </div>
              ))}
          </div>
        </main>
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  .Home {
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2vw;
      padding: 1vw;
      flex-wrap: wrap;
      .superHeros1,
      .superHeros2,
      .superHeros3 {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
      }
      img {
        position: relative;
        width: 13vw;
        height: 15vw;
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
        left: -0.2vw;
        width: 12vw;
        height: 2.5vw;
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

  /* for big tablets portrait and mobiles landscape */
  @media screen and (max-width: 991px) {
    .Home {
      margin-top: 5vw;
      gap: 4vw;
      main {
        gap: 4vw;
        .superHeros1,
        .superHeros2,
        .superHeros3 {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          gap: 2vw;
        }
        img {
          box-shadow: 0.3vw 0.3vw 0.6vw rgba(33, 33, 33, 0.6);
          width: 20vw;
          height: 28vw;
          border-radius: 2vw;
          border: 0.4vw solid #212121;
          &:hover {
            transform: rotate(15deg);
          }
        }
      }
      .superhero-container {
        .design {
          display: none;
        }
      }
      a {
        width: 27.5vw;
        border-radius: 5vw;
        button {
          box-shadow: 0.3vw 0.3vw 0.6vw rgba(33, 33, 33, 0.6);
          border-radius: 5vw;
          font-size: 3.6vw;
          padding: 1.7vw 4.1vw;
        }
      }
    }
  }

  /* for mobiles portrait & small tablets portrait */
  @media screen and (max-width: 767px) {
    .Home {
      gap: 5vw;
      margin-top: 5vw;
      main {
        flex-direction: row;
        justify-content: center;
        gap: 5vw;
        .superHeros1,
        .superHeros2,
        .superHeros3 {
          width: 43%;
          flex-direction: column;
          align-items: center;
          gap: 5vw;
          .design {
            display: none;
          }
        }
        img {
          box-shadow: 0.6 0.6vw 0.8vw rgba(33, 33, 33, 0.6);
          border: 0.6vw solid rgba(33, 33, 33, 0.9);
          width: 40vw;
          height: 55vw;
          border-radius: 2vw;
          &:hover {
            transform: rotate(10deg);
          }
        }
        .superHeros3 {
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
      a {
        width: 35vw;
        border-radius: 5vw;
        button {
          box-shadow: 0.4vw 0.4vw 0.6vw rgba(33, 33, 33, 0.9);
          border-radius: 5vw;
          font-size: 5vw;
          padding: 1.7vw 4.1vw;
        }
      }
    }
  }
`;
