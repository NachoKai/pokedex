import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
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
                <i class="fas fa-leaf"></i> Grass
              </span>
            </div>
            <div className="card-data-typeB">
              <span>
                <i class="fas fa-skull-crossbones"></i>Poison
              </span>
            </div>
          </div>
        </div>

        <div className="card-img-circle">
          <div className="card-img">
            <img src={props.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
