import React from "react";
import { Link } from "react-router-dom";
import "../login/login.css";
import image from "../../assets/img/phone-xxl.png";

function Login() {
  return (
    <>
      <div>
        <div className="screen1">
          <div className="container">
            <div className="row">
              <div className="col-7"></div>
              <div className="col-5">
                <div className="screen1-inner">
                  <div className="card">
                    <div className="card-body">
                      <img src={image} />
                      <h5 className="card-title">
                        <span>META</span> TALENT{" "}
                      </h5>

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
                        <div className="screen-btn">
                          <a className="btn btn-primary w-100" type="button">Button</a> 
                        </div>

                        <span><a href="#">Forget Password?</a></span>
                        <div className="wrapper-btn">
                          <p>or continue with</p>
                        </div>

                        <div className="Sign-btn">
                          <a className="btn btn-outline-primary  w-50" type="button">Sign in with Google</a>
                        </div>


                        <div className="register-btn">
                          <a className="btn btn-primary w-50" type="button">REGISTER NOW</a> 
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
