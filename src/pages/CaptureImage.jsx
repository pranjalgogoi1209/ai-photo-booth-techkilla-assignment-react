import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CaptureImage() {
  const [img, setImg] = useState();
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

  const handleSubmit = () => {
    if (img) {
      navigate("/avatar");
    } else {
      alert("Capture an image");
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
          <i>Watching</i>
        </div>
        {img && <img src={img} />}
      </div>

      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
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
        position: absolute;
        top: 0.5vw;
        left: 13vw;
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
  }
  .submit {
    margin-top: 2vw;
    width: 33vw;
  }
`;
