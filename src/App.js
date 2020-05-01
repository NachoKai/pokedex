import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="card-cont">
        <Card
          name="Bulbasaur"
          id="1"
          kanji="フシギダネ"
          img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        />
        <Card
          name="Ivysaur"
          id="2"
          kanji="フシギソウ"
          img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
        />
        <Card
          name="Venusaur"
          id="3"
          kanji="フシギバナ"
          img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
        />
      </div>
    </div>
  );
}

export default App;
