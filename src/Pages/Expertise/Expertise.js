import React, { useState } from "react";
import "../Expertise/Expertise.css";
import ProgressBar from 'react-animated-progress-bar';
import person from '../../assets/img/person-vector.png';
import badge from '../../assets/img/star-badge.png';
import CashIcon from '../../assets/img/cash-icon.png'

function Expertise() {

  const [data, setData] = useState([
    { title: "Attention", percentage: 90 },
    { title: "Knowledge", percentage: 87 },
    { title: "Experience", percentage: 55 },
    { title: "Focus", percentage: 69 },
    { title: "Commitment", percentage: 70 },
  ]);

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
            <div className="wrapper-bg main-card">
              <div className="row">
                <div className="col-5">
                  <div className="left-img">
                    <img className="person-img" src={person} />

                    <div className="level-card">
                      <img className="star-badge" src={badge} />
                      <p>
                        Level <span>8</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-7">
                  {data.map((d) => (
                    <div className="row pb-3">
                      <div className="col-1">
                        <img className="percentage-icon" src={CashIcon} />
                      </div>
                      <div className="col-11">
                        <p className="mb-1">{d.title}</p>
                        <div class="progress">
                          <ProgressBar
                            width="100%"
                            height="13px"
                            rect
                            fontColor="gray"
                            percentage={d.percentage}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#ffffff"
                            trackBorderColor="grey"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="yellow-btn mt-5 text-center">
              <a className="me-3 text-black">Back</a>
              <a className="text-black">Next</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
