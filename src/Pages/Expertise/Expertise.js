import React from "react";
import "../Expertise/Expertise.css";
import { Link } from "react-router-dom";

function Expertise() {
  return (
    <div className="screen5 gradient-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="home-heading">
              <h1>Meta-Assessment</h1>
              <p>Strength Matrix</p>
            </div>
          </div>

          <div className="col-12">
            <div className="wrapper-bg">
              <div className="row">
                <div className="col-4">
                  <div className="left-img">
                    <img></img>
                  </div>
                </div>

                <div className="col-4">
                  <div class="progress">
                    
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
