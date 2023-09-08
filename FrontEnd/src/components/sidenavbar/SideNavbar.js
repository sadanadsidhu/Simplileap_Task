import React from "react";
import "./sidenavbar.css";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { HiBriefcase } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import { PiListChecksBold } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { VscBellDot } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { NavLink } from "react-router-dom";
const SideNavbar = () => {
  return (
    <div className="side-navbar-logo">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <BiSolidCategoryAlt />
      </NavLink>

      <NavLink
        to="/deals"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <HiBriefcase />
      </NavLink>

      <NavLink
        to="/people"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <GoPeople />
      </NavLink>
      <NavLink
        to="/checklist"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <PiListChecksBold />
      </NavLink>

      <NavLink
        to="/calendar"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <LuCalendarDays />
      </NavLink>

      <NavLink
        to="/notification"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <VscBellDot />
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <SlSettings />
      </NavLink>
    
    </div>
  );
};

export default SideNavbar;
