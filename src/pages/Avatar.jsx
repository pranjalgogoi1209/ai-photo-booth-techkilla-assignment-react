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
          superHeros.reverse().map((superHero, index) => (
            <div
              key={index}
              className={`single-image ${
                index === selectedImg ? "selected" : ""
              }`}
              onClick={() => setSelectedImg(index)}
            >
              <img src={superHero.img} />

              <div
                className="img-hover-effect"
                onClick={() => setSelectedImg(index)}
              >
                <p>Select {superHero.name} avatar and generate your image</p>
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
    border: 1px solid black;
    padding: 1vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6vw;
    .single-image {
      box-shadow: 0 0.8vw 1vw rgba(33, 33, 33, 1);
      height: 39.5vh;
      position: relative;
      border: 0.3vw solid #212121;
      border-top-right-radius: 2vw;
      border-top-left-radius: 2vw;
      overflow: hidden;
      transition: all ease 0.3s;
      img {
        width: 100%;
        height: 100%;
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
      .not-display {
        display: none;
      }
      .selected-text {
        display: flex;
        position: absolute;
        bottom: 3.3vw;
        right: 0vw;
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

  /* for ultra hi-res laptops and desktops */
  @media screen and (min-width: 1721px) {
    background-color: green;
  }

  /* for big-tablets & mobile-landscape */
  @media screen and (max-width: 991px) {
    background-color: orange;
    gap: 5vw;
    margin-top: 5vw;
    h1 {
      font-size: 7vw;
    }
    main {
      gap: 6vw;
      .single-image {
        border: 0.6vw solid #212121;
        height: 50vw;
        width: 40vw;
      }
      .selected {
        border: 0.6vw solid #f1f1f1;
        .selected-text {
          bottom: 6vw;
          right: 0.7vw;
          font-size: 3.3vw;
          padding: 1vw 1.7vw;
          border: 0.4vw solid #f1f1f1;
        }
      }
      .img-hover-effect {
        gap: 3vw;
        img {
          border-radius: 50%;
          width: 12vw;
          height: 12vw;
          border: 0.2vw solid #f1f1f1;
        }
        p {
          padding: 1vw;
          /* line-height: 2vh; */
          font-size: 3vw;
        }
      }
    }
    button {
      box-shadow: 0 0 1vw rgba(33, 33, 33, 0.7);
      width: 86vw;
      height: 8vh;
      font-size: 6vw;
      padding: 1.7vw 2vw;
      border-radius: 6vw;
    }
  }

  /* for phones */
  @media screen and (max-width: 767px) {
    background-color: pink;
    gap: 5vw;
    margin-top: 5vw;
    h1 {
      font-size: 7vw;
    }
    main {
      gap: 6vw;
      .single-image {
        border: 0.6vw solid #212121;
        height: 50vw;
        width: 40vw;
      }
      .selected {
        border: 0.6vw solid #f1f1f1;
        .selected-text {
          bottom: 6vw;
          right: 0.7vw;
          font-size: 3.3vw;
          padding: 1vw 1.7vw;
          border: 0.4vw solid #f1f1f1;
        }
      }
      .img-hover-effect {
        gap: 3vw;
        img {
          border-radius: 50%;
          width: 12vw;
          height: 12vw;
          border: 0.2vw solid #f1f1f1;
        }
        p {
          padding: 1vw;
          /* line-height: 2vh; */
          font-size: 3vw;
        }
      }
    }
    button {
      box-shadow: 0 0 1vw rgba(33, 33, 33, 0.7);
      width: 86vw;
      height: 8vh;
      font-size: 6vw;
      padding: 1.7vw 2vw;
      border-radius: 6vw;
    }
  }
`;
