import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_options">
        <div className="navbar_option">
          <i class="fas fa-th"></i>
        </div>
        <div className="navbar_option">
          <i class="fas fa-sort-amount-down-alt"></i>
        </div>
        <div className="navbar_option">
          <i class="fas fa-sliders-h"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
