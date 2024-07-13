import "./EditPortfolioPage.scss";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import EditHero from "../../components/EditHero/EditHero";
import EditWork from "../../components/EditWork/EditWork";
import EditGallery from "../../components/EditGallery/EditGallery";
import EditAbout from "../../components/EditAbout/EditAbout";

function EditPortfolioPage() {
  //TODO : fix once login is integrated with EditPortfolio page
  //const userId= sessionStorage.getItem("photonest_user_id");
  // const userId = 4;
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
      <main>
        <h1>Edit Portfolio:</h1>
        <EditHero userId={userId} />
        <EditWork userId={userId} />
        <EditAbout userId={userId} />
        <EditGallery userId={userId} />
      </main>
    </>
  );
}

export default EditPortfolioPage;
