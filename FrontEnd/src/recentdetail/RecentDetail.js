import React, { useEffect, useState } from "react";
import "./RecentDetail.css";
import { Link } from "react-router-dom";
import axios from "axios";
const RecentDetail = () => {
  const [list, setList] = useState();
  console.log("list", list);

  const getAllDealsList = async (searchQuery) => {
    try {
      const response = await axios.get(
        "http://localhost:8082/deals/listofdeals"
      );

      let filteredRows = response.data;
      console.log("response.data", response.data);

      setList(filteredRows);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllDealsList();
  }, []);
  return (
    <div className="recent-detail-view">
      <div className="recent-deals">
        <p className="recent">Recent Deals</p>
        <Link className="view-all" to="/deals">
          View All
        </Link>
      </div>
      <div className="haul-road">
        {list &&
          list.map((details) => {
            console.log("details", details);
            return (
              <div className="doller">
                <div className="deals-logo">
                  <img className="deals-png" src={details.picture} alt="" />
                  <div className="deals-haul-road">
                    <h3 className="haul-road">319 Haul Road</h3>
                    <p className="Glenr">Glenrock,,WY</p>
                  </div>
                </div>
                <div className="deals-$">
                  <h3 className="deals-57">{details.price}</h3>
                  <p className="deals-nov">{details.appointmentdate}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RecentDetail;
