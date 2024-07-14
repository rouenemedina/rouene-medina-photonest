import "./EditPortfolioPage.scss";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import EditHero from "../../components/EditHero/EditHero";
import EditWork from "../../components/EditWork/EditWork";
import EditConnect from "../../components/EditConnect/EditConnect";
import EditAbout from "../../components/EditAbout/EditAbout";
import EditGallery from "../../components/EditGallery/EditGallery";

function EditPortfolioPage() {
  const navigate = useNavigate();
  const userId= sessionStorage.getItem("photonest_user_id");
  const userType = sessionStorage.getItem("photonest_user_type");
  console.log(userType);


  useEffect(() => {
    if(!userId || userType !== "photographer"){
      navigate("/*");
      return;
    }
  }, [userId, userType, navigate]);

  return (
    <>
      <Header />
      <main className="editPortfolio">
        <h1 className="editPortfolio__title">Edit Portfolio:</h1>
        <EditHero userId={userId} />
        <EditWork userId={userId} />
        <EditAbout userId={userId} />
        <EditConnect userId={userId}/>
        <EditGallery userId={userId} />
      </main>
    </>
  );
}

export default EditPortfolioPage;
