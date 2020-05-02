import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <div>
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
      <span className="error-text">4</span>
      <img
        className="error-img"
        alt="Pokeball"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c31f.png"
      />
      <span className="error-text">4</span>
    </div>
  );
};

export default Error;
