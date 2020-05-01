import React from "react";
import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-up">
        <div className="modal-up_top">
          <i class="fas fa-arrow-left"></i>
        </div>
        <div className="modal-up_mid">
          <div className="modal-info">
            <div className="modal-info-id">
              <span>#004</span>
            </div>
            <div className="modal-info-name">
              <span>Charmander</span>
            </div>
            <div className="modal-info-kanji">
              <span>ヒトカゲ</span>
            </div>
            <div className="modal-info-types">
              <div className="modal-info-typeA">
                <span>
                  <i className="fas fa-fire-alt"></i>
                  Fire
                </span>
              </div>
              <div className="modal-info-typeA">
                <span></span>
              </div>
            </div>
          </div>
          <div className="modal-img">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
          </div>
        </div>
        <div className="modal-up_down">
          <span className="tab active">About</span>
          <span className="tab">Stats</span>
          <span className="tab">Evolution</span>
        </div>
      </div>

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
    </div>
  );
};

export default Modal;
