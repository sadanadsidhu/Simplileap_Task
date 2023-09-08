import React from "react";
import "./DealsProgress.css";
const DealsProgress = () => {
  return (
    <div className="deals-progress-card">
      <div className="deals-progress-graph">
        <div className="deals-progress-detail">
          <img
            className="deals-progress-avatar"
            src={require("../assets/icons/Image2.png")}
            alt=""
          />
          <div className="deals-progress-nameplace">
            <h3 className="turkey-1824">1824 Turkey Pen Road</h3>
            <p className="cleveland">Cleveland, OH 12345</p>
          </div>
        </div>
        <div className="deals-inprogress">
          <button className="deals-progress">In Progress</button>
          <img
            className="icon2"
            src={require("../assets/icons/Icon2.png")}
            alt=""
          />
        </div>
      </div>
      <div className="installation">
        <div className="radio-button-1">
          <div className="radio-button-2">
            <img
              className="icon3"
              src={require("../assets/icons/Icon3.png")}
              alt=""
            />
          </div>
          <div className="installation-nov">
            <p className="inst-nov">17 Nov 2021</p>
            <h3 className="inst-system">
              Installation of the new air conditioning system
            </h3>
          </div>
        </div>
        <div className="radio-button-1">
          <div className="radio-button">
            <img src={require("../assets/icons/Icon3.png")} alt="" />
          </div>
          <div className="installation-20">
            <p className="inst-nov">17 Nov 2021</p>
            <h3 className="inst-system">
              Installation of the new air conditioning system
            </h3>
          </div>
        </div>
      </div>
      <div className="load-more">
        <h2>Load More</h2>
      </div>
    </div>
  );
};

export default DealsProgress;
