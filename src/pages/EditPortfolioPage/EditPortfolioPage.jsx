import "./EditPortfolioPage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import EditHero from "../../components/EditHero/EditHero";
import Buttons from "../../components/Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditPortfolioPage() {
  const [editHeroFormData, setEditHeroFormData] = useState({
    hero_description: "",
  });
  //this is for handling errors in the form
  const [formErrors, setFormErrors] = useState({});
  //this is for errors in the axios call

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditHeroFormData({ ...editHeroFormData, [name]: value })
  };

  //to store the updated formData to a variable
  //post endpoint
  //handle reset

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <EditHero
            editHeroFormData={editHeroFormData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </form>
        <Buttons showSubmit />
      </main>
    </>
  );
}

export default EditPortfolioPage;
