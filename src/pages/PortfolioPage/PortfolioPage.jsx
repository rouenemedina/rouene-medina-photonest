import "./PortfolioPage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import PhotographersSection from "../../components/PhotographersSection/PhotographersSection";
import PortfolioGallery from "../../components/PortfolioGallery/PortfolioGallery";
import PortfolioContactSection from "../../components/PortfolioContactSection/PortfolioContactSection";
import PortfolioHero from "../../components/PortfolioHero/PortfolioHero";
import PortfolioWork from "../../components/PortfolioWork/PortfolioWork";

function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="portfolio">
        <PortfolioHero />
        <PortfolioWork />
        <PhotographersSection />
        <PortfolioContactSection />
        <PortfolioGallery />
      </main>
    </>
  );
}

export default PortfolioPage;
//TODO: refactor to dynamic state
