import React from "react";
import { Link } from "react-router-dom";
import "../MetaAsessment/MetaAssessment.css";

function MetaAssessment() {
  return (
    <>
      <div className="strengths gradient-body">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
             <div className="home-heading">
             <h1>Meta-Assessment</h1>
              <p>Pick 5 strengths</p>
             </div>
            </div>

            <div className="col-10">
              <div className="strengths-inner">
                <div className="row">
                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Restorative</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Learner</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Intellect</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Input</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Ideation</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Focus</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Analytical</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Arranger</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Command</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="chip">
                      <a href="#">Adaptability </a>
                    </div>
                  </div>

                  <div className="col-4 pr-5">
                    <div className="chip">
                      <a href="#">Activator</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           <div className="col-6">
              <div className="yellow-btn mt-5 text-center">
                <a>Back</a>
                <a>Next</a>
              </div>
           </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MetaAssessment;
