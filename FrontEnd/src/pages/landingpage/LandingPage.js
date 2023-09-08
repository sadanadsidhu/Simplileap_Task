import React from "react";
import NextAppointment from "../../components/nextAppointment/NextAppointment";
import TotalCountCard from "../../components/TotalCountsCard/TotalCountCard";
import RecentDetail from "../../recentdetail/RecentDetail";
import DealsProgress from "../../DealsInProgress/DealsProgress";
import Customer from "../../Customer/Customer";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <div className="main_container">
      <div className="left">
        <div className="top">
          <NextAppointment />
          <RecentDetail />
        </div>
        <div className="bottom">
          <div className="countCard_container">
            <TotalCountCard />
            {/* <TotalCountCard /> */}
          </div>
          <DealsProgress />
        </div>
      </div>
      <div className="right">
        <Customer />
      </div>
    </div>
  );
}
