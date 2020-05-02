import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import About from "./Tabs/About";
import Stats from "./Tabs/Stats";
import Evolution from "./Tabs/Evolution";
import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-up">
        <div className="modal-up_top">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
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
            <img
              alt=""
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
            />
          </div>
        </div>
        <div className="modal-up_down">
          <div className="modal-up_down-links">
            <NavLink to="/modal/about" className="tab" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/modal/stats" className="tab" activeClassName="active">
              Stats
            </NavLink>
            <NavLink
              to="/modal/evolution"
              className="tab"
              activeClassName="active"
            >
              Evolution
            </NavLink>
          </div>

          <Router>
            <Switch>
              <Route path="/modal/evolution">
                <Evolution />
              </Route>
              <Route path="/modal/stats">
                <Stats />
              </Route>
              <Route path="/modal/about">
                <About />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Modal;
