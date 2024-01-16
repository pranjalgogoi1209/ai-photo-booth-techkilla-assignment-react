import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CaptureImage({ setCapturedImg }) {
  const [img, setImg] = useState();
  const [isWebcamPresent, setIsWebcamPresent] = useState(false);
  const webRef = useRef();
  const btnRef = useRef();
  const navigate = useNavigate();

  const handleCapture = () => {
    if (btnRef.current.innerText === "Capture") {
      setImg(webRef.current.getScreenshot());
      btnRef.current.innerText = "Retake";
    } else {
      img && setImg("");
      btnRef.current.innerText = "Capture";
    }
  };

  setTimeout(() => {
    setIsWebcamPresent(true);
  }, 1300);

  // toast options
  const toastOptions = {
    position: "bottom-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = () => {
    if (img) {
      setCapturedImg(img);
      navigate("/avatar");
    } else {
      toast.error("Please capture your image", toastOptions);
    }
  };

  return (
    <CaptureImageWrapper>
      <button onClick={handleCapture} ref={btnRef} className="capture">
        Capture
      </button>

      <div className="webcam-container">
        <div className="webcam-parent">
          <Webcam ref={webRef} className="webcam" />
          {isWebcamPresent && <i className="fa-solid fa-eye fa-bounce"></i>}
        </div>
        {img && <img src={img} />}
      </div>

      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
      <ToastContainer />
    </CaptureImageWrapper>
  );
}

const CaptureImageWrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  .webcam-container {
    border: 0.3vw solid rgba(33, 33, 33, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 50vh;
    width: 33vw;
    background-color: #212121;
    border-radius: 2vw;
    .webcam-parent {
      position: relative;
      i {
        font-size: 2.5vw;
        position: absolute;
        top: 1.7vw;
        left: 15vw;
        color: #ccc;
      }
    }
  }
  .webcam {
    border-radius: 2vw;
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 2vw;
  }
  .capture {
    font-size: 1.5vw;
    width: 10vw;
    background-color: #212121;
    color: #f1f1f1;
    border: 0.3vw solid #212121;
    border-radius: 1vw;
    padding: 0.7vw 1vw 0.7vw 1vw;
  }
  .submit {
    margin-top: 2vw;
    width: 33vw;
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
`;
