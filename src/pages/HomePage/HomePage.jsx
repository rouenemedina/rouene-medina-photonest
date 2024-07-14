import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import logoImg from "../../assets/logo/Logo-2.png";

function HomePage() {
  return (
    <>
      <header className="homepage__header">
        <Header />
        <img src={logoImg} className="homepage__logo"></img>
        <HomePageHero />
      </header>
    </>
  );
}

export default HomePage;
