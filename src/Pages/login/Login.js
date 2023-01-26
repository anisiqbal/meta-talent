import React from "react";
import { Link } from "react-router-dom";
import "../login/login.css";
import image from "../../assets/img/logo.png";

function Login() {
  return (
    <>
      <div>
        <div className="screen1 gradient-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 col-12"></div>

              <div className="col-lg-4 col-md-5 col-12">
                <div className="screen1-inner">
                  <div className="card">
                    <div className="card-body">
                      <img src={image} />

                      <div className="form-inner">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter your email address"
                          aria-describedby="emailHelp"
                        />
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder=" Password"
                          aria-describedby="emailHelp"
                        />
                        <div className="yellow-btn">
                          <a className="w-100 text-center mt-4" type="button">
                            SIGN IN
                          </a>
                        </div>

                        <div className="forget-pass mt-2">
                          <a className="text-black-50">Forget password?</a>
                        </div>
                        <div className="wrapper-btns">
                          <p>or continue with</p>
                        </div>

                        <div className="sign-btn-google">
                          <button type="button" class="login-with-google-btn">
                            Sign in with Google
                          </button>
                        </div>

                        <div className="purple-btn mt-5 mb-3 text-center">
                          <a>REGISTER NOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
