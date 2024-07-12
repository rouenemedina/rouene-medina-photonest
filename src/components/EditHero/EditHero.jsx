import PhotoUpload from "../PhotoUpload/PhotoUpload";
import "./EditHero.scss";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Buttons from "../Buttons/Buttons";

//setup the forms
//handle the change when there is a user input
//handle submit or handle upload
//handle errors
const API_URL = import.meta.env.VITE_APP_API_URL;

function EditHero({ userId }) {
  const [editHeroFormData, setEditHeroFormData] = useState({
    hero_description: "",
    user_id: userId,
    file: "",
  });
  //this is for handling errors in the form
  const [formErrors, setFormErrors] = useState({});
  //this is for errors in the axios call
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditHeroFormData({ ...editHeroFormData, [name]: value });
  };

  const handleFileChange = (file) => {
    setUploadedFile(file);
  };

  //to store the updated formData to a variable
  //post endpoint
  //handle reset

  const handleSubmit = async (event) => {
    event.preventDefault();

    //validate the form
    const validate = (value) => {
      let errors = {};
      if (!value.hero_description) {
        errors.hero_description = "Please fill out the required field.";
      }
      return errors;
    };
    const errors = validate(editHeroFormData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    const updatedEditHeroFormData = new FormData();
    updatedEditHeroFormData.append(
      "hero_description",
      editHeroFormData.hero_description
    );
    updatedEditHeroFormData.append(
      "user_id", editHeroFormData.user_id
    );
    updatedEditHeroFormData.append(
      "file", uploadedFile
    );

    try {
      await axios.post(`${API_URL}/hero/upload`, updatedEditHeroFormData);
      setSuccess(true);
      setError(null);
    } catch (err) {
      console.log(err);
      setSuccess(false);
      setError("Error uploading file. Please try again.")
    }

    const handleReset = () => {
      setEditHeroFormData({
        hero_description: "",
        user_id: userId,
        file: null,
      })
      setUploadedFile(null);
    };
  };

  return (
    <main className="editHero">
      <form className="editHero__form" onSubmit={handleSubmit}>
        <PhotoUpload onFileChange={handleFileChange} />
        <section className="editHero__container">
          <label htmlFor="hero_description" className="editHero__label">
            DESCRIPTION:
          </label>
          <textarea
            type="textarea"
            name="hero_description"
            className="editHero__description"
            placeholder="Enter image description."
            value={editHeroFormData.hero_description}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.hero_description && (
            <span id="heroDescriptionError" className="editHero__error">
              {formErrors.hero_description}
            </span>
          )}
        </section>
        <Buttons showSubmit />
      </form>
    </main>
  );
}

export default EditHero;
