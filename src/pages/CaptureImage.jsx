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

  useEffect(() => {
    webRef.current &&
      setTimeout(() => {
        setIsWebcamPresent(true);
      }, 1500);
  }, [webRef.current]);

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
      <div className="webcam-with-capture">
        <div className="webcam-container">
          <div className="webcam-parent">
            <Webcam ref={webRef} className="webcam" />
            {isWebcamPresent && (
              <i className="fa-solid fa-camera fa-bounce"></i>
            )}
          </div>
          {img && <img src={img} />}
        </div>
        <button onClick={handleCapture} ref={btnRef} className="capture">
          Capture
        </button>
      </div>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
      <ToastContainer />
    </CaptureImageWrapper>
  );
}

const CaptureImageWrapper = styled.div`
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
    width: 40vw;
    height: 30vw;
    background-color: #212121;
    border-radius: 2vw;
    overflow: hidden;
    .webcam-parent {
      width: 100%;
      height: 100%;
      position: relative;
      i {
        font-size: 2.5vw;
        position: absolute;
        top: 2vw;
        left: 18.5vw;
        color: #eee;
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

  /* for ultra hi-res laptops and desktops */
  @media screen and (min-width: 1721px) {
    margin-top: 2vw;
    background-color: green;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    .webcam-container {
      width: 40vw;
      height: 30vw;
      .webcam-parent {
        i {
          top: 2vw;
          left: 18.5vw;
        }
      }
    }
    .submit {
      width: 40vw;
    }
  }

  /* for big tablets and mobile landscape */
  @media screen and (max-width: 991px) {
    background-color: orange;
    margin-top: 5vw;
    gap: 5vh;
    .webcam-with-capture {
      display: flex;
      gap: 2vw;
      align-items: center;
    }
    .webcam-container {
      border: 0.6vw solid rgba(33, 33, 33, 0.9);
      width: 60vw;
      height: 45vw;
      .webcam-parent {
        i {
          font-size: 5vw;
          top: 3vw;
          left: 27vw;
        }
      }
    }
    .capture {
      width: 25vw;
      height: 10vw;
      font-size: 3vw;
      padding: 1.2vw 1.5vw;
    }
    .submit {
      width: 87vw;
      height: 9vw;
      font-size: 5vw;
      padding: 1.7vw 2vw;
      border-radius: 6vw;
    }
  }

  /* for small tablet portrait */
  @media screen and (max-width: 767px) {
    background-color: pink;
    margin-top: 5vw;
    gap: 5vh;
    .webcam-with-capture {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6vh;
    }
    .webcam-container {
      border: 1vw solid rgba(33, 33, 33, 0.9);
      width: 50vh;
      height: 53vh;
      .webcam-parent {
        i {
          font-size: 7vw;
          top: 5vw;
          left: 36vw;
        }
      }
    }
    .capture {
      width: 30vw;
      font-size: 4vw;
      padding: 1.7vw 2vw;
      margin-top: -4vh;
    }
    .submit {
      width: 80vw;
      height: 8vh;
      font-size: 6vw;
      padding: 1.7vw 2vw;
      border-radius: 6vw;
    }
  }

  /* for mobiles portrait and small tablets portrait */
  @media screen and (max-width: 600px) {
    background-color: pink;
    margin-top: 5vw;
    gap: 5vh;
    .webcam-with-capture {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6vh;
    }
    .webcam-container {
      border: 1vw solid rgba(33, 33, 33, 0.9);
      width: 80vw;
      height: 53vh;
      .webcam-parent {
        i {
          font-size: 7vw;
          top: 5vw;
          left: 36vw;
        }
      }
    }
    .capture {
      width: 30vw;
      font-size: 4vw;
      padding: 1.7vw 2vw;
      margin-top: -4vh;
    }
    .submit {
      width: 80vw;
      height: 8vh;
      font-size: 6vw;
      padding: 1.7vw 2vw;
      border-radius: 6vw;
    }
  }
`;
