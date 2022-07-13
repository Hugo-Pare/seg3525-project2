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
        <NavLink to='/seg3525-project2'>
          Guide de l'Investisseur
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activestyle={null}>
            À propos
          </NavLink>
          <NavLink to='/analyser' activestyle={null}>
            Analyser
          </NavLink>
          <NavLink to='/comparer' activestyle={null}>
            Comparer
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/rechercher'>Rechercher</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;