import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";

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
      <Navbar />
      <button>Start Now</button>
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
  button {
    border: 1px solid black;
    display: block;
    margin: auto;
    outline: none;
    background-color: transparent;
  }
`;
