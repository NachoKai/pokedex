import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import About from "./Tabs/About";
import Stats from "./Tabs/Stats";
import Evolution from "./Tabs/Evolution";

const Container = styled.div`
	margin: 0.5rem auto;
	max-width: 600px;
	border-radius: 1rem;
	background-color: #495057;
	display: flex;
	flex-direction: column;

	a {
		text-decoration: none;
	}

	.tab {
		color: #868e96;
		font-size: 1.1rem;
		font-weight: bold;

		&:hover {
			cursor: pointer;
		}
	}

	.active {
		color: #eee;
		font-weight: bold;

		&:hover {
			cursor: pointer;
		}
	}

	.modal-data-title,
	.modal-training-title {
		border-top: 1px solid #d4d4d4;
		padding: 1rem 0 0 0;
		font-size: 1.1rem;
		font-weight: 900;
		margin-top: 1rem;
	}
`;

const ModalUp = styled.div`
	padding: 0.5rem 0;
	display: flex;
	align-content: center;
	justify-content: flex-start;
	flex-direction: column;
`;

const ModalUpTop = styled.div`
	padding: 0 0.5rem;

	.fa-arrow-left {
		color: #fff;
		font-size: 1.5rem;
	}

	.fas {
		&:hover {
			cursor: pointer;
		}
	}
`;

const ModalImg = styled.div`
	width: 50%;

	img {
		width: 100%;
		height: auto;
		max-width: 250px;
	}
`;

const ModalDown = styled.div`
	background-color: #eee;
	border-radius: 1rem;
	padding: 0.5rem;
`;

const ModalUpDown = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const ModalUpDownLinks = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const ModalUpMid = styled.div`
	padding: 0 0.5rem;
	color: #eee;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 1rem;
`;

const ModalInfoName = styled.div`
	margin-top: 0.5rem;
	font-size: 1.5rem;
	font-weight: bold;
`;

const ModalInfoKanji = styled.div`
	margin-bottom: 0.5rem;
`;

const ModalInfoTypes = styled.div`
	align-items: center;
	margin: 0.5rem 0;
	display: flex;

	.fas {
		margin-right: 0.2rem;
	}
`;

const ModalInfoTypeA = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: flex;
		font-size: 0.8rem;
		padding: 0.3rem;
		margin: 0 0.2rem 0 0;
		background-color: #212529;
		color: #fff;
		border-radius: 0.4rem;
	}
`;

const ModalInfoTypeB = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: flex;
		font-size: 0.8rem;
		padding: 0.3rem;
		margin: 0 0 0 0.2rem;
		background-color: #495057;
		color: #fff;
		border-radius: 0.4rem;
	}
`;

const Modal = () => {
	return (
		<Container>
			<ModalUp>
				<ModalUpTop>
					<Link to='/'>
						<i className='fas fa-arrow-left'></i>
					</Link>
				</ModalUpTop>
				<ModalUpMid>
					<div className='modal-info'>
						<div className='modal-info-id'>
							<span>#004</span>
						</div>
						<ModalInfoName>
							<span>Charmander</span>
						</ModalInfoName>
						<ModalInfoKanji>
							<span>ヒトカゲ</span>
						</ModalInfoKanji>
						<ModalInfoTypes>
							<ModalInfoTypeA>
								<span>
									<i className='fas fa-fire-alt'></i>
									Fire
								</span>
							</ModalInfoTypeA>
							<ModalInfoTypeA>
								<span></span>
							</ModalInfoTypeA>
						</ModalInfoTypes>
					</div>
					<ModalImg>
						<img alt='' src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' />
					</ModalImg>
				</ModalUpMid>
				<ModalUpDown>
					<ModalUpDownLinks>
						<NavLink to='/modal/about' className='tab' activeClassName='active'>
							About
						</NavLink>
						<NavLink to='/modal/stats' className='tab' activeClassName='active'>
							Stats
						</NavLink>
						<NavLink to='/modal/evolution' className='tab' activeClassName='active'>
							Evolution
						</NavLink>
					</ModalUpDownLinks>

					<Router>
						<Switch>
							<Route path='/modal/evolution'>
								<Evolution />
							</Route>
							<Route path='/modal/stats'>
								<Stats />
							</Route>
							<Route path='/modal/about'>
								<About />
							</Route>
						</Switch>
					</Router>
				</ModalUpDown>
			</ModalUp>
		</Container>
	);
};

export default Modal;
