import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	flex-wrap: wrap;
	height: 100vh;
`;

const ErrorText = styled.span`
	font-size: 20vw;
	font-weight: 900;
`;

const ErrorImg = styled.img`
	width: 100%;
	height: auto;
	max-width: 20vw;
`;
const Error = () => {
	return (
		<Container>
			<div>
				<Link to='/'>
					<i className='fas fa-arrow-left'></i>
				</Link>
			</div>
			<ErrorText>4</ErrorText>
			<ErrorImg
				alt='Pokeball'
				src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c31f.png'
			/>
			<span className='error-text'>4</span>
		</Container>
	);
};

export default Error;
