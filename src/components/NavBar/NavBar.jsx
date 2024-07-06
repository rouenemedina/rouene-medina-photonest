import "./NavBar.scss";
import React from "react";

import { NavLink } from "react-router-dom";

function NavBar({ isClicked, closeMenu }) {
  const navBarClasses = `navBar__menu ${isClicked ? "--open" : ""}`;

  return (
    <main className={navBarClasses}>
      <section className="navBar">
        <NavLink className="navBar__link" onClick={closeMenu}>
          <h4 className="navBar__title">HOME</h4>
        </NavLink>
        <NavLink className="navBar__link" onClick={closeMenu}>
          <h4 className="navBar__title">PHOTOGRAPHER</h4>
        </NavLink>
        <NavLink className="navBar__link" onClick={closeMenu}>
          <h4 className="navBar__title">PORTFOLIO</h4>
        </NavLink>
        <NavLink className="navBar__link" onClick={closeMenu}>
          <h4 className="navBar__title">CONTACT</h4>
        </NavLink>
      </section>
    </main>
  );
}

export default NavBar;
