import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_options">
        <div className="navbar_option">
          <i className="fas fa-th"></i>
        </div>
        <div className="navbar_option">
          <i className="fas fa-sort-amount-down-alt"></i>
        </div>
        <div className="navbar_option">
          <i className="fas fa-sliders-h"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
