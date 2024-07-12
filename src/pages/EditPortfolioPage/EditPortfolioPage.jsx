import "./EditPortfolioPage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import EditHero from "../../components/EditHero/EditHero";

function EditPortfolioPage() {
  //TODO : fix once login is integrated with EditPortfolio page
  //const userId= sessionStorage.getItem("photonest_user_id");
  const userId = 4;

  return (
    <>
      <Header />
      <main>
        <EditHero userId={userId} />
      </main>
    </>
  );
}

export default EditPortfolioPage;
