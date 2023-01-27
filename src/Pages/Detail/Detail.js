import React from "react";
import { Link } from "react-router-dom";
import "../Detail/Detail.css";
import slider1 from "../../assets/img/slider1.png";
import slider2 from "../../assets/img/slider2.png";
import slider3 from "../../assets/img/slider3.png";

function Detail() {
  return (
    <>
      <div className="screen2 gradient-body">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="screen2-inner">
                <h1>Hello!</h1>
                <p>
                METALENT.AI is an awesome futuristic learning platform. We can
                add some really cool skills to your profile and connect you to
                amazing opportunities at the same time
                </p>
                <div className="yellow-btn mt-5">
                  <a type="button">
                    Let's Start
                  </a>
                </div>
                <h6 className="text-center w-25">OR</h6>
                <div className="gray-btn">
                  <a type="button">
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="col-5">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card-carousal">
                        <img src={slider1} />
                        <p>All in one solution for skills, training, interviews and job placements</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card-carousal">
                        <img src={slider2} />
                        <p>All in one solution for skills, training, interviews and job placements</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card-carousal">
                        <img src={slider3} />
                        <p>All in one solution for skills, training, interviews and job placements</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
