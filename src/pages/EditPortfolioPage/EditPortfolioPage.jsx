import "./EditPortfolioPage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import EditHero from "../../components/EditHero/EditHero";
import Buttons from "../../components/Buttons/Buttons";

function EditPortfolioPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <EditHero />
        </form>
        <Buttons showSubmit />
      </main>
    </>
  );
}

export default EditPortfolioPage;
