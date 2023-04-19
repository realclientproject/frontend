import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div>
      <NavLink to={"/dashboard"}>
        <b></b>
        <u></u>
        <span>Dashboard</span>
      </NavLink>
      <NavLink to={"/login"}>
        <b></b>
        <u></u>
        <span>login</span>
      </NavLink>
      <NavLink to={"/help"}>
        <b></b>
        <u></u>
        <span>Help</span>
      </NavLink>
      <NavLink to={"/lesson"}>
        <b></b>
        <u></u>
        <span>lesson</span>
      </NavLink>
      <NavLink to={"/home"}>
        <b></b>
        <u></u>
        <span>home</span>
      </NavLink>
    </div>
  );
}

export default SideBar;
