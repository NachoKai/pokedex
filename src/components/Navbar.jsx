import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	padding: 0.5rem;
	justify-content: flex-end;
`;

const NavbarOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavbarOption = styled.div`
	padding: 0.5rem;

	&:hover {
		cursor: pointer;
	}
`;

const Navbar = () => {
	return (
		<Container>
			<NavbarOptions>
				<NavbarOption>
					<i className='fas fa-th'></i>
				</NavbarOption>
				<NavbarOption>
					<i className='fas fa-sort-amount-down-alt'></i>
				</NavbarOption>
				<NavbarOption>
					<i className='fas fa-sliders-h'></i>
				</NavbarOption>
				<NavbarOption>
					<i className='fas fa-moon'></i>
				</NavbarOption>
			</NavbarOptions>
		</Container>
	);
};

export default Navbar;
