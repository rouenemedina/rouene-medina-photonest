import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import HomePageHero from "../../components/HomePageHero/HomePageHero";

function HomePage() {
  return (
    <>
      <header className="homepage__header">
        <Header />
        <HomePageHero />
      </header>
    </>
  );
}

export default HomePage;
