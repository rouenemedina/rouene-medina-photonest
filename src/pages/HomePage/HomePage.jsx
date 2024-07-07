import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

function HomePage() {
  return (
    <>
      <header className="homepage__header">
        <Header />
        <Hero />
      </header>
      <main></main>
    </>
  );
}

export default HomePage;
