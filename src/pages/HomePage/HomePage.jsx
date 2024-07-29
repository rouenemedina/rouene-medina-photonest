import "./HomePage.scss";
import React from "react";
import logoImg from "../../assets/logo/Logo-2.png";
import Header from "../../components/Header/Header";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import HomePageFeature from "../../components/HomePageFeature/HomePageFeature";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <header className="homepage__header">
        <Header />
        {/* <img src={logoImg} className="homepage__logo"></img> */}
        <HomePageHero />
      </header>
      <main>
        <HomePageFeature />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
