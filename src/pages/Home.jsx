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
  return (
    <HomeWrapper>
      <Link to={"/capture-image"}>
        <button>Start Now</button>
      </Link>
      <main className="images-container">
        {superHeros &&
          superHeros.map(superHero => <img src={superHero} key={superHero} />)}
      </main>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  .images-container {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    gap: 2vw;
    flex-wrap: wrap;
    img {
      width: 15vw;
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
