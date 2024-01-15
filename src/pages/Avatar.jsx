import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

export default function Avatar() {
  const [selectedImg, setSelectedImg] = useState();
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
  selectedImg && console.log(selectedImg);

  return (
    <AvatarWrapper>
      <main className="images-container">
        {superHeros &&
          superHeros.map((superHero, index) => (
            <div
              key={superHero}
              className={index === selectedImg ? "selected-img" : ""}
            >
              <img src={superHero} onClick={e => setSelectedImg(index)} />
            </div>
          ))}
      </main>
      <button>Generate Image</button>
    </AvatarWrapper>
  );
}

const AvatarWrapper = styled.div`
  border: 1px solid black;

  .images-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2vw;
    .selected-img {
      border: 2px solid red;
    }
    img {
      width: 15vw;
      cursor: pointer;
    }
  }
  button {
    margin-top: 2vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
