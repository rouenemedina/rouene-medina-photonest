import "./PortfolioPage.scss";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PortfolioGallery from "../../components/PortfolioGallery/PortfolioGallery";
import PortfolioContactSection from "../../components/PortfolioContactSection/PortfolioContactSection";
import PortfolioHero from "../../components/PortfolioHero/PortfolioHero";
import PortfolioWork from "../../components/PortfolioWork/PortfolioWork";
import PhotographerAbout from "../../components/PhotographerAbout/PhotographerAbout";

function PortfolioPage() {
  const navigate = useNavigate();
  const userId= sessionStorage.getItem("photonest_user_id");

  useEffect(() => {
    if(!userId){
      navigate("/login");
      return;
    }
  }, [userId, navigate]);

  return (
    <>
      <Header />
      <main className="portfolio">
        <PortfolioHero userId={userId}/>
        <PortfolioWork userId={userId}/>
        <PhotographerAbout userId={userId}/>
        <PortfolioContactSection userId={userId}/>
        <PortfolioGallery userId={userId}/>
      </main>
    </>
  );
}

export default PortfolioPage;
//TODO: refactor to dynamic state
