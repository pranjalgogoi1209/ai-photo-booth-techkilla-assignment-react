import React, { useState } from "react";
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

export default function Avatar({ capturedImg }) {
  const [selectedImg, setSelectedImg] = useState();

  const superHeros = [
    {
      img: superHero1,
      name: "Super Man",
    },
    {
      img: superHero2,
      name: "Harry Potter",
    },
    {
      img: superHero3,
      name: "Super Woman",
    },
    {
      img: superHero4,
      name: "Hermione Granger",
    },
    {
      img: superHero5,
      name: "Captain America",
    },
    {
      img: superHero6,
      name: "Thor",
    },
    {
      img: superHero7,
      name: "Aquaman",
    },
    {
      img: superHero8,
      name: "Scarlet Witch",
    },
    {
      img: superHero9,
      name: "Natasha",
    },
    {
      img: superHero10,
      name: "Wonder Women",
    },
  ];

  return (
    <AvatarWrapper>
      <h1>Select your Avatar</h1>
      <main>
        {superHeros &&
          superHeros.map((superHero, index) => (
            <div
              key={index}
              className={`single-image ${
                index === selectedImg ? "selected" : ""
              }`}
            >
              <img src={superHero.img} />

              <div
                className="img-hover-effect"
                onClick={() => setSelectedImg(index)}
              >
                <p>Select {superHero.name}'s avatar and generate your image</p>
                <img src={capturedImg} alt="user-captured-image" />
              </div>
              <div className="selected-text">Selected</div>
            </div>
          ))}
      </main>
      <button>Generate Image</button>
    </AvatarWrapper>
  );
}

const AvatarWrapper = styled.div`
  border: 1px solid black;
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8vw;
    .single-image {
      box-shadow: 0 0.8vw 1vw rgba(33, 33, 33, 1);
      height: 39.5vh;
      position: relative;
      border: 0.3vw solid #212121;
      border-bottom: 0;
      border-top-right-radius: 2vw;
      border-top-left-radius: 2vw;
      overflow: hidden;
      transition: all ease 0.3s;
      img {
        width: 15vw;
        cursor: pointer;
        transition: all 0.5s;
      }
      &:hover img {
        transform: scale(1.1);
      }
      &:hover .img-hover-effect {
        height: 100%;
      }
    }
    .selected {
      border: 0.3vw solid #f1f1f1;
      position: relative;
      .selected-text {
        position: absolute;
        bottom: 3.1vw;
        left: 4.5vw;
        transform: rotate(-40deg);
        font-size: 2vw;
        color: #f1f1f1;
        font-weight: bold;
        border-radius: 1vw;
        padding: 0.4vw 0.8vw 0.4vw 0.8vw;
        background-color: #212121;
        border: 0.2vw solid #f1f1f1;
      }
    }
    .img-hover-effect {
      position: absolute;
      bottom: 0;
      height: 0;
      width: 100%;
      overflow: hidden;
      transition: height ease 0.5s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1vw;
      background: linear-gradient(rgba(241, 241, 241, 0.3), #212121);
      cursor: pointer;
      img {
        border-radius: 50%;
        width: 5vw;
        height: 5vw;
        border: 0.1vw solid #212121;
      }
      p {
        color: #f1f1f1;
        font-weight: bold;
        text-align: center;
        padding: 0.5vw;
      }
    }
  }
  button {
    margin-top: 2vw;
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
`;
