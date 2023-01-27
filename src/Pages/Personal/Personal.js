import React from "react";
import { Link } from "react-router-dom";
import "../Personal/Personal.css";
import image from "../../assets/img/personal1.jpg";

function Personal() {
  return (
    <>
      <div>
        <div className="screen3 gradient-body">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="main-card">
                  <img src={image} />

                  <div className="light-purple-btn mt-5 text-center">
                    <a className="text-white">Upload Picture</a>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="form-inner">
                  <input
                    type="name"
                    class="form-control"
                    placeholder="First Name"
                  />

                  <input
                    type="name"
                    class="form-control"
                    placeholder="Last Name"
                  />

                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />

                  <input
                    type="name"
                    class="form-control"
                    placeholder="First Name"
                  />

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Date of Birth"
                  />

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                  />

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Retype Password"
                  />

                  <label class="container-checkbox mt-3">
                    I agree with the terms and conditions and privacy policy
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-4 text-center">
                <div className="yellow-btn">
                  <a className="w-100 text-black">Next</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Personal;
