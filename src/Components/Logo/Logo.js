import React from "react";
import "./Logo.css";
import logo from "../../logo.png";

const Logo = () => {
  return (
    <div className="brand-logo">
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
