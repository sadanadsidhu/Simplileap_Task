import React from "react";
import "./NextAppointment.css";
const NextAppointment = () => {
  return (
    <aside className="next-appointment-all-detail">
      <div className="next-appointment-detail">
        <p className="next-appontment-word">
          Next Appointment
          <img className="next-appointment-bedges" src={require("../../assets/icons/Badge.png")} alt="Badge" />
          </p>
      </div>
      <div className="Haul">
        <div className="road">
          <img className="next-appointment-avatar" src={require("../../assets/icons/Image (1).png")} alt="" />
          <div className="Road">
          <p>319 Haul Road</p>
          <p>Glenrock,WY 12345</p>
          </div>
        </div>
      </div>
      <div className="AppDate">
         <p className="Date">Appointment Date</p>
         <h3 className="Nov">Nov 18 2021, 17:00</h3>
      </div>
      <div className="Room">
        <div className="Area">
            <p className="R">Room Area</p>
            <p className="P">Pepole</p>
        </div>
        <div className="People">
        <h3 className="M">100 <sup>2</sup></h3>
            <h2 className="Num">10</h2>

        </div>
      </div>
      <div className="Price">
        <div className="Pri">
        <p>Price</p>
        <h3>$5750</h3>
      </div>
      <di className="See">
      <button className="SeeDetail">See Detail</button>
      </di>
      </div>
    </aside>
  );
};

export default NextAppointment;
