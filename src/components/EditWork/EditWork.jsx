import "./EditWork.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Buttons from "../Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditWork({ workId, userId }) {
  const [editWorkFormData, setEditWorkFormData] = useState({
    work_title: "",
    user_id: userId,
    file: "",
  });

  //this is for handling errors in the form
  const [formErrors, setFormErrors] = useState({});
  //this is for errors in the axios call
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
    setEditWorkFormData({ ...editWorkFormData, [name]: value });
  };

  const handleFileChange = (file) => {
    setUploadedFile(file);
  };

  const handleReset = () => {
    setEditWorkFormData({
      work_id: workId,
      work_title,
      user_id: userId,
      file: "",
    });
    setUploadedFile(null);
    setFormErrors({});
    setError(null);
    setSuccess(false);
    setRedirect(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validate = (value) => {
      const errors = {};
      if (!value.work_title) {
        errors.itemName = "Please fill out the required field.";
      }
      return errors;
    };

    const errors = validate(editWorkFormData);
    if (Object.keys(errors).length === 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    const updatedEditWorkFormData = new FormData();
    updatedEditWorkFormData.append("work_id", editWorkFormData.work_id);
    updatedEditWorkFormData.append("work_title", editWorkFormData.work_title);
    updatedEditWorkFormData.append("user_id", editWorkFormData.user_id);
    updatedEditWorkFormData.append("file", uploadedFile);

    try {
      await axios.post(`${API_URL}/work/post`);
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
    <main className="editWork">
      <form className="editWork__form" onSubmit={handleSubmit}>
        <section className="editWork__container">
          <PhotoUpload onFileChange={handleFileChange} formType="work"/>
          <article className="editWork__card">
            <label htmlFor="work_title" className="editWork__label">
              TITLE:
            </label>
            <input
              type="text"
              name="work_title"
              className="editWork__input"
              value={editWorkFormData.work_title}
              onChange={handleChange}
              placeholder="Work Title"
            />
          </article>
        </section>
        <section className="editWork__container">
          <PhotoUpload onFileChange={handleFileChange} formType="work"/>
          <article className="editWork__card">
            <label htmlFor="work_title" className="editWork__label">
              TITLE:
            </label>
            <input
              type="text"
              name="work_title"
              className="editWork__input"
              value={editWorkFormData.work_title}
              onChange={handleChange}
              placeholder="Work Title"
            />
          </article>
        </section>
        <section className="editWork__container">
          <PhotoUpload onFileChange={handleFileChange} formType="work"/>
          <article className="editWork__card">
            <label htmlFor="work_title" className="editWork__label">
              TITLE:
            </label>
            <input
              type="text"
              name="work_title"
              className="editWork__input"
              value={editWorkFormData.work_title}
              onChange={handleChange}
              placeholder="Work Title"
            />
          </article>
        </section>
        <Buttons showSubmit />
      </form>
      
    </main>
  );
}

export default EditWork;
