import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PhotographersSection from "../../components/PhotographersSection/PhotographersSection";

function HomePage() {
  return (
    <>
      <header className="homepage__header">
        <Header />
        <Hero />
      </header>
      {/* <main>
        <PhotographersSection />
      </main> */}
    </>
  );
}

export default HomePage;
