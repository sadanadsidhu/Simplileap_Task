import React from "react";
import "./dealsTable.css";
import { BiEditAlt } from "react-icons/bi";
import { BsImageAlt } from "react-icons/bs";
const DealsTable = ({ rows }) => {
  return (
    <table className="deals-detail-list">
      <thead>
        <tr className="tablerow">
          <th className="incenter">
            <BsImageAlt size={24} className="bsimage" />
          </th>
          <th className="information-deals">Address</th>
          <th className="information-deals">Area</th>
          <th className="information-deals">Appointment date</th>
          <th className="information-deals">Price</th>
          <th className="information-deals">Status</th>
          <th className="information-deals">Edit</th>
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((details) => {
            return (
              <tr className="deals-information">
                <td className="incenter">
                  <img className="avatar" src={details.picture} alt="" />
                </td>
                <td className="spruce">{details.address}</td>
                <td className="spruce">
                  {details.area}
                  <sup>2</sup>
                </td>
                <td className="spruce">{details.appointmentdate}</td>
                <td className="spruce">{details.price}</td>
                <td>
                  <button className="in-progress">{details.status}</button>
                </td>
                <td>
                  <BiEditAlt className="edit-icon" />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DealsTable;
