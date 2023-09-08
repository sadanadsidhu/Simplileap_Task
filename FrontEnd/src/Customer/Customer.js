import React from "react";
import "./Customer.css";
import { BiEditAlt } from "react-icons/bi";
import TaskTodo from "../TaskTodo/TaskTodo";

const Customer = () => {
  return (
    <div className="customer-all-detail">
      <div className="customer_rows">
        <div className="customer-detail">
          <div className="customer-text">
            <h2 className="custom">Customer</h2>
          </div>
          <di className="view-all-2">View All</di>
        </div>
        <div className="customber-logo">
          <div className="customer-infor">
            <img
              className="avatar"
              src={require("../assets/icons/Avatar.png")}
              alt=""
            />
            <div className="customer-name">
              <h2 className="willi">Andrea Willis</h2>
              <p className="email">andrewwillis@gmail.com</p>
            </div>
            {/* <BiEditAlt size={24} className="edit-icon"/> */}
          </div>
          <BiEditAlt className="edit-icon" />
        </div>
        <div className="customber-logo">
          <div className="customer-infor">
            <img
              className="avatar"
              src={require("../assets/icons/Avatar.png")}
              alt=""
            />
            <div className="customer-name">
              <h2 className="willi">Andrea Willis</h2>
              <p className="email">andrewwillis@gmail.com</p>
            </div>
            {/* <BiEditAlt size={24} className="edit-icon"/> */}
          </div>
          <BiEditAlt className="edit-icon" />
        </div>
        <div className="customber-logo">
          <div className="customer-infor">
            <img
              className="avatar"
              src={require("../assets/icons/Avatar.png")}
              alt=""
            />
            <div className="customer-name">
              <h2 className="willi">Andrea Willis</h2>
              <p className="email">andrewwillis@gmail.com</p>
            </div>
            {/* <BiEditAlt size={24} className="edit-icon"/> */}
          </div>
          <BiEditAlt className="edit-icon" />
        </div>
      </div>

      <TaskTodo />
      
    </div>
  );
};

export default Customer;
