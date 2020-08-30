import React from "react";
import styled from 'styled-components'

const Container = styled.div`
display: flex;
padding: 0.5rem;
justify-content: flex-end;
`

const NavbarOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavbarOption = styled.div`
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`

// .header_subtitle {
//   h3 {
//     font-size: 1rem;
//     font-weight: normal;
//     color: #868e96;
//   }
// }

const Navbar = () => {
  return (
    <Container>
      <NavbarOptions>
        <NavbarOption>
          <i className="fas fa-th"></i>
        </NavbarOption>
        <div className="navbar_option">
          <i className="fas fa-sort-amount-down-alt"></i>
        </div>
        <div className="navbar_option">
          <i className="fas fa-sliders-h"></i>
        </div>
        <div className="navbar_option">
          <i className="fas fa-moon"></i>
        </div>
      </NavbarOptions>
    </Container>
  );
};

export default Navbar;
