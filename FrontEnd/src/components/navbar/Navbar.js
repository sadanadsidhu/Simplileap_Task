import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-all-detail">
      <div className="navbar-logo">
        <img
          src={require("../../assets/icons/Logo .png")}
          alt="logo"
          srcset=""
        />
        <p className="dashbord">Dashboard</p>
      </div>
      <div className="navbar-right-side">
        <div className="navbar-right-element">
          <button className="AddButton">Add New +</button>
          <img
            className="navbar-search-icon"
            src={require("../../assets/icons/Icon.png")}
            alt="SearchIcon"
            srcSet=""
          />
          <img
            className="navbar-right-avatar"
            src={require("../../assets/icons/User.png")}
            alt="logo"
            srcset=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
