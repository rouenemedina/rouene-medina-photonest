import "./EditAbout.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Buttons from "../Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditAbout({ userId }) {
  const [editAboutFormData, setEditAboutFormData] = useState({
    about_name: "",
    about_description: "",
    user_id: userId,
  });
  //this is for handling errors in the form
  const [formErrors, setFormErrors] = useState({});
  //this is for errors in the axios call
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploadedFile1, setUploadedFile1] = useState(null);
  const [uploadedFile2, setUploadedFile2] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/portfolio");
    }
  }, [redirect, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditAboutFormData({ ...editAboutFormData, [name]: value });
  };

  const handleFileChange1 = (file) => {
    setUploadedFile1(file);
  };

  const handleFileChange2 = (file) => {
    setUploadedFile2(file);
  };

  const handleReset = () => {
    setEditAboutFormData({
      about_name: "",
      about_description: "",
      user_id: userId,
    });
    setUploadedFile1(null);
    setUploadedFile2(null);
    setFormErrors({});
    setError(null);
    setSuccess(false);
    setRedirect(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validate = (value) => {
      const errors = {};
      if (!value.about_name || !value.about_description) {
        errors.hero_description = "Please fill out the required field.";
      }
      return errors;
    };

    const errors = validate(editAboutFormData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    const updatedEditAboutFormData = new FormData();
    updatedEditAboutFormData.append(
      "about_name",
      editAboutFormData.about_name
    );
    updatedEditAboutFormData.append(
      "about_description",
      editAboutFormData.about_description
    );
    updatedEditAboutFormData.append("user_id", editAboutFormData.user_id);
    updatedEditAboutFormData.append("files", uploadedFile1);
    updatedEditAboutFormData.append("files", uploadedFile2);

    try {
      await axios.post(`${API_URL}/about/upload`, updatedEditAboutFormData);
      setSuccess(true);
      setError(null);
      handleReset();
    } catch (err) {
      console.log(err.response || err.message);
      setSuccess(false);
      setError("Error uploading files. Please try again.");
    }
  };

  return (
    <>
      <main className="editAbout">
        <h2>ABOUT SECTION:</h2>
        <form className="editAbout__form" onSubmit={handleSubmit}>
          <PhotoUpload onFileChange={handleFileChange1} />
          <section className="editAbout__container">
            <label htmlFor="about_name" className="editAbout__label">
              NAME:
            </label>
            <input
              type="text"
              name="about_name"
              className="editAbout__input"
              value={editAboutFormData.about_name}
              onChange={handleChange}
              placeholder="What should we call you?"
            />
          </section>
          <section className="editAbout__container">
            <label htmlFor="about_description" className="editAbout__label">
              DESCRIPTION:
            </label>
            <textarea
              type="textarea"
              name="about_description"
              className="editAbout__description"
              placeholder="Tell us about yourself and what you do."
              value={editAboutFormData.about_description}
              onChange={handleChange}
              required
            ></textarea>
            {/* {formErrors.about_description && (
              <span id="aboutDescriptionError" className="editAbout__error">
                {formErrors.about_description}
              </span>
            )} */}
          </section>
          <PhotoUpload onFileChange={handleFileChange2} />
          <Buttons showSubmit />
        </form>
      </main>
    </>
  );
}

export default EditAbout;
