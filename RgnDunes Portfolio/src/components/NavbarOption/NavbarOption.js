import React from "react";
import "./NavbarOption.css";

const NavbarOption = ({ icon, text }) => {
  return (
    <div className="navbarOption">
      <div className="navbarOption__icon">{icon}</div>
      <div className="navbarOption__text">{text}</div>
    </div>
  );
};

export default NavbarOption;
