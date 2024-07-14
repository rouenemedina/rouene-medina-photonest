import "./Header.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import logoImg from "../../assets/logo/Logo.png";
import userImg from "../../assets/images/a-daniel-lincoln-NR705beN_CU-unsplash.jpg";
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
    <MdOutlineMenu className="navBar__hamburger" onClick={handleMenuClick} />
  );

  const CloseMenu = (
    <MdClose className="navBar__hamburger" onClick={closeMenu} />
  );

  return (
    <nav className="header">
      {click ? CloseMenu : HamburgerMenu}
      {click && <NavBar isClicked={true} closeMenu={closeMenu} />}
      <img src={logoImg} alt="PhotoNest Logo" className="header__logo"></img>
      <section className="header__user">
        <Link to="/dashboard" className="header__link">
          <img src={userImg} alt="User Profile Photo" className="header__img" />
        </Link>
      </section>
    </nav>
  );
}

export default Header;
