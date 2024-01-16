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
      <div className="webcam-container">
        <Webcam ref={webRef} className="webcam" />
        {img && <img src={img} />}
      </div>
      <button onClick={handleCapture} ref={btnRef} className="capture">
        Capture
      </button>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </CaptureImageWrapper>
  );
}

const CaptureImageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  align-items: center;
  border: 1px solid black;
  .webcam-container {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 50vh;
    width: 33vw;
  }
  .webcam {
    border: 1px solid black;
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .capture {
    font-size: 2vw;
  }
  .submit {
    margin-top: 2vw;
  }
`;
