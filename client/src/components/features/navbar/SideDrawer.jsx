import React, { useState, useEffect } from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  show && sideDrawerClass.push("show");

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links landingsidedrawer" onClick={click}>
        <li>Test</li>
      </ul>
    </div>
  );
};

export default SideDrawer;
