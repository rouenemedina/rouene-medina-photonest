import "./EditHero.scss";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Buttons from "../Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditHero({ userId }) {
  const [editHeroFormData, setEditHeroFormData] = useState({
    hero_description: "",
    user_id: userId,
  });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/portfolio");
    }
  }, [redirect, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditHeroFormData({ ...editHeroFormData, [name]: value });
  };

  const handleFileChange = (file) => {
    setUploadedFile(file);
  };

  const handleReset = () => {
    setEditHeroFormData({
      hero_description: "",
      user_id: userId,
    });
    setUploadedFile(null);
    setFormErrors({});
    setError(null);
    setSuccess(false);
    setRedirect(true);
  };

  const validate = (value) => {
    const errors = {};
    if (!value.hero_description) {
      errors.hero_description = "Please fill out the required field.";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    updatedEditHeroFormData.append("user_id", editHeroFormData.user_id);
    updatedEditHeroFormData.append("file", uploadedFile);

    try {
      await axios.post(`${API_URL}/hero/upload`, updatedEditHeroFormData);
      setSuccess(true);
      setError(null);
      handleReset();
    } catch (err) {
      console.log(err);
      setSuccess(false);
      setError("Error uploading file. Please try again.");
    }
  };

  return (
    <main className="editHero">
      <h2 className="editHero__title">HERO SECTION:</h2>
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
            <span className="editHero__error">
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
