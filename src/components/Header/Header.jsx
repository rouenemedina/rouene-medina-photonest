import "./Header.scss";
import React from "react";
import { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import logoImg from "../../assets/logo/Logo.png";
import NavBar from "../NavBar/NavBar";

function Header() {
  const [click, setClick] = useState(false);

  const handleMenuClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const HamburgerMenu = (
    <MdOutlineMenu
      className="navBar__hamburger"
      onClick={handleMenuClick}
    />
  );

  const CloseMenu = (
    <MdClose
      className="navBar__hamburger"
      onClick={closeMenu}
    />
  );

  return (
    <nav className="header">
      <img src={logoImg} alt="PhotoNest Logo" className="header__logo"></img>
      {click ? CloseMenu : HamburgerMenu}
      {click && <NavBar isClicked={true} closeMenu={closeMenu}/>}
      <section className="header__user"></section>
    </nav>
  );
}

export default Header;
