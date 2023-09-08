import React from "react";
import "./totalcountcard.css";
import customerLogo from "../../assets/icons/profile-2user.png";
import dealsLogo from "../../assets/icons/deals.png";

const TotalCountCard = () => {
  const Data = [
    {
      name: "Customers",
      totalCount: 78,
      imgurl: customerLogo,
    },
    {
      name: "Deals",
      totalCount: 136,
      imgurl: dealsLogo,
    },
  ];
  return (
    <>
      {Data &&
        Data.map((data) => {
          return (
            <div className="total-count-card">
              <div className="total-customer-count">
                <p className="customer-style">{data.name}</p>
                <h1 className="seventy-eight">{data.totalCount}</h1>
              </div>
              <div className="customer-logo">
                <img
                  className="total-count-card-logo"
                  src={data.imgurl}
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TotalCountCard;
