import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header_title">
        <h1>Pókedex</h1>
      </div>
      <div className="header_subtitle">
        <h3>
          Search for Pókemon by name or using the National Pokedex number.
        </h3>
      </div>
      <div className="header_search">
        <div className="header_search-bar">
          <div className="header_search-input">
            <i className="fas fa-search"></i>
            <input placeholder="Which Pókemon are you looking for?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
