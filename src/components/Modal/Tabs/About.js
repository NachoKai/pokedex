import React from "react";
import "../Modal.scss";

const About = () => {
  return (
    <div className="modal-down">
      <div className="modal-description">
        The flame that burns at the tip of its tail is an indication of its
        emotions. The flame wavers when Charmander is enjoying itself. If the
        Pokémon becomes enraged, the flame burns fiercely.
      </div>
      <div className="modal-data">
        <div className="modal-data-title">Pokedex Data</div>
        <div className="modal-data-info">
          <p>
            <b>Species: </b>Lizard Pokemon
          </p>
          <p>
            <b>Height: </b>0.6m
          </p>
          <p>
            <b>Weight: </b>8.5kg
          </p>
          <p>
            <b>Abilities: </b>Blaze
          </p>
          <p>
            <b>Weaknesses: </b>icon icon icon
          </p>
        </div>
      </div>
      <div className="modal-training">
        <div className="modal-training-title">Training</div>
        <div className="modal-training-info">
          <p>
            <b>EV Yield: </b> 1 Speed
          </p>
          <p>
            <b>Catch Rate: </b> 45
          </p>
          <p>
            <b>Base Friendship: </b>70 (Normal)
          </p>
          <p>
            <b>Base Exp: </b>62
          </p>
          <p>
            <b>Growth Rate: </b>Medium Slow
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
