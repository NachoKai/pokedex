import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Error from "./components/Error/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/modal">
          <Modal />
        </Route>
        <Route path="/">
          <div className="App">
            <Navbar />
            <Header />
            <div className="card-cont">
              <Card
                name="Bulbasaur"
                id="001"
                kanji="フシギダネ"
                typeA="Grass"
                typeAicon="fas fa-leaf"
                typeB="Poison"
                typeBicon="fas fa-skull-crossbones"
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              />
              <Card
                name="Ivysaur"
                id="002"
                kanji="フシギソウ"
                typeA="Grass"
                typeAicon="fas fa-leaf"
                typeB="Poison"
                typeBicon="fas fa-skull-crossbones"
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
              />
              <Card
                name="Venusaur"
                id="003"
                kanji="フシギバナ"
                typeA="Grass"
                typeAicon="fas fa-leaf"
                typeB="Poison"
                typeBicon="fas fa-skull-crossbones"
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
              />
              <Card
                name="Charmander"
                id="004"
                kanji="ヒトカゲ"
                typeA="Fire"
                typeAicon="fas fa-fire-alt"
                typeB=""
                typeBicon=""
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
              />
              <Card
                name="Charmeleon"
                id="005"
                kanji="リザード"
                typeA="Fire"
                typeAicon="fas fa-fire-alt"
                typeB=""
                typeBicon=""
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
              />
              <Card
                name="Charinzard"
                id="006"
                kanji="リザードン"
                typeA="Fire"
                typeAicon="fas fa-fire-alt"
                typeB="Flying"
                typeBicon="fas fa-feather-alt"
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
              />
              <Card
                name="Squirtle"
                id="007"
                kanji="ゼニガメ"
                typeA="Water"
                typeAicon="fas fa-tint"
                typeB=""
                typeBicon=""
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
              />
              <Card
                name="Wartotle"
                id="008"
                kanji="カメール"
                typeA="Water"
                typeAicon="fas fa-tint"
                typeB=""
                typeBicon=""
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
              />
              <Card
                name="Blastoise"
                id="009"
                kanji="カメックス"
                typeA="Water"
                typeAicon="fas fa-tint"
                typeB=""
                typeBicon=""
                img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
              />
            </div>
          </div>
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
