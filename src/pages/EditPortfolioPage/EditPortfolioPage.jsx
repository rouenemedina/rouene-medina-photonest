import "./EditPortfolioPage.scss";
import React from "react";

import Header from "../../components/Header/Header";
import EditHero from "../../components/EditHero/EditHero";
import Buttons from "../../components/Buttons/Buttons";



function EditPortfolioPage() {
    
  //TODO : fix once login is integrated with EditPortfolio page
  //const userEmail = sessionStorage.getItem("photonest_email", formData.user_email);
  const userEmail = "test@test.ca";

  return (
    <>
      <Header />
      <main>
          <EditHero
          userEmail={userEmail}
          />
      </main>
    </>
  );
}

export default EditPortfolioPage;
