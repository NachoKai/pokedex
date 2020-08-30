import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	padding: 0.5rem;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 1rem;

	.fa-search {
		padding-right: 0.5rem;

		&:hover {
			cursor: pointer;
		}
	}
`;

const HeaderTitle = styled.div`
	h1 {
		font-weight: 900;
		margin: 0;
	}
`;

const HeaderSubTitle = styled.div`
	h3 {
		font-weight: 400;
		margin: 0.5rem 0;
	}
`;

const HeaderSearch = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderSearchBar = styled.div`
	max-width: 300px;
	display: flex;
	background-color: #f2f4f4;
	border-radius: 1rem;
	padding: 0.5rem;
	width: 100%;
`;

const HeaderSearchInput = styled.div`
	display: flex;
	width: 100%;

	input {
		background-color: transparent;
		border: none;
		width: 100%;
	}
`;

const Header = ({ onSearchChange }) => {
	return (
		<Container>
			<HeaderTitle>
				<a href='/pokedex'>
					<h1>Pókedex</h1>
				</a>
			</HeaderTitle>
			<HeaderSubTitle>
				<h3>Search for Pókemon by name or using the National Pokedex number.</h3>
			</HeaderSubTitle>
			<HeaderSearch>
				<HeaderSearchBar>
					<HeaderSearchInput>
						<i className='fas fa-search'></i>
						<input onChange={onSearchChange} placeholder='Which Pókemon are you looking for?' />
					</HeaderSearchInput>
				</HeaderSearchBar>
			</HeaderSearch>
		</Container>
	);
};

export default Header;
