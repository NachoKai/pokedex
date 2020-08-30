import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "../src/components/Navbar";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import Modal from "../src/components/Modal";
import Error from "../src/components/Error";

const CardContainer = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 1000px;
`;

function App() {
	const [pokemon, setPokemon] = useState([]);
	const [load, setLoad] = useState("true");

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
			.then(res => res.json())
			.then(data =>
				data.results.map(item => {
					fetch(item.url)
						.then(res => res.json())
						.then(allPokemon => pokemon.push(allPokemon));
					return setPokemon(pokemon);
				})
			);
	}, [pokemon]);

	const handleNumber = num => {
		if (num.toString().split("").length === 1) {
			let str = num.toString().padStart(3, "0");
			return str;
		}
		if (num.toString().split("").length === 2) {
			let str = num.toString().padStart(3, "0");
			return str;
		}
		if (num.toString().split("").length === 3) {
			return num;
		}
	};

	setTimeout(() => {
		setLoad(false);
	}, 1000);

	const [searchField, setSearchFields] = useState("");

	const onSearchChange = event => {
		setSearchFields(event.target.value);
	};

	const filteredPokemons = pokemon.filter(p =>
		p.name.toLowerCase().includes(searchField.toLowerCase())
	);

	return (
		<Router>
			<Switch>
				<Route path='/modal' basename='/pokedex'>
					<Modal pokemon={pokemon} handleNumber={handleNumber} />
				</Route>
				<Route path='/' basename='/pokedex'>
					<div className='App'>
						<Navbar />
						<Header pokemon={pokemon} onSearchChange={onSearchChange} />
						<CardContainer>
							{load ? (
								<p>Loading...</p>
							) : (
								filteredPokemons.map((p, i) => {
									return (
										<Card
											key={p.id}
											name={p.name.charAt(0).toUpperCase() + p.name.slice(1)}
											id={p.id}
											kanji='フシギダネ'
											typeA={p.types[0].type.name.toUpperCase()}
											// typeAicon={`fas fa-${p.types[0].type.name}`}
											typeB={p.types[1] && p.types[1].type.name.toUpperCase()}
											// typeBicon={p.types[1] && `fas fa-${p.types[1].type.name}`}
											img={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${handleNumber(
												p.id
											)}.png`}
										/>
									);
								})
							)}
						</CardContainer>
					</div>
				</Route>
				<Route basename='/pokedex'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
