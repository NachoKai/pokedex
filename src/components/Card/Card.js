import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  return (
    <Link to="/modal">
      <div className="card-container">
        <div className="card">
          <div className="card-data">
            <div className="card-data-id">
              <span>#{props.id}</span>
            </div>

            <div className="card-data-name">
              <span>{props.name}</span>
              <div className="card-data-kanji">
                <span>{props.kanji}</span>
              </div>
            </div>
            <div className="card-data-types">
              <div className="card-data-typeA">
                <span>
                  <i className={props.typeAicon}></i>
                  {props.typeA}
                </span>
              </div>
              <div className="card-data-typeB">
                <span>
                  <i className={props.typeBicon}></i>
                  {props.typeB}
                </span>
              </div>
            </div>
          </div>

          <div className="card-img-circle">
            <div className="card-img">
              <img alt="" src={props.img} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
