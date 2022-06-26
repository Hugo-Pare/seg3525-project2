import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/seg3525-project2/home'>
          Guide de l'investisseur
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/seg3525-project2/about' activestyle={null}>
            À propos
          </NavLink>
          <NavLink to='/seg3525-project2/analyser' activestyle={null}>
            Analyser
          </NavLink>
          <NavLink to='/seg3525-project2/comparer' activestyle={null}>
            Comparer
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/seg3525-project2/rechercher'>Rechercher</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;