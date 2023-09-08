import React, { useEffect, useState } from "react";
import DealsTable from "./DealsTable";
import "./dealslist.css";
import { TbFilterPlus } from "react-icons/tb";
import axios from "axios";

export default function DealsList() {
  const [list, setList] = useState();
  console.log("list", list);
  const getAllDealsList = async (searchQuery) => {
    try {
      const response = await axios.get(
        "http://localhost:8082/deals/listofdeals"
      );

      let filteredRows = response.data;
      setList(filteredRows);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllDealsList();
  }, []);
  return (
    <div className="deals-list-table">
      <div className="deals-table-data">
        <div className="total">Total:136 deals</div>
        <div className="sorte-by-date">
          <select className="total-deals">
            <option value="volvo">Sorted by:Date Created</option>
            <option value="saab">Area</option>
            <option value="opel">Appointment Date</option>
            <option value="audi">Price</option>
            <option value="volvo">Status</option>
          </select>
          <div className="search-bar">
            <input type="text" placeholder="Filter" />
            <TbFilterPlus size={24} style={{ color: "gray" }} />
          </div>
        </div>
      </div>
      <DealsTable rows={list} />
    </div>
  );
}
