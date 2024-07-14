import "./EditWork.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Buttons from "../Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditWork({ userId }) {
  const [editWorkFormData, setEditWorkFormData] = useState({
    work_title1: "",
    work_title2: "",
    work_title3: "",
    user_id: userId,
  });
  //this is for handling errors in the form
  const [formErrors, setFormErrors] = useState({});
  //this is for errors in the axios call
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploadedFile1, setUploadedFile1] = useState(null);
  const [uploadedFile2, setUploadedFile2] = useState(null);
  const [uploadedFile3, setUploadedFile3] = useState(null);
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

  const handleFileChange1 = (file) => {
    setUploadedFile1(file);
  };

  const handleFileChange2 = (file) => {
    setUploadedFile2(file);
  };

  const handleFileChange3 = (file) => {
    setUploadedFile3(file);
  };

  const handleReset = () => {
    setEditWorkFormData({
      work_title1: "",
      work_title2: "",
      work_title3: "",
      user_id: userId,
    });
    setUploadedFile1(null);
    setUploadedFile2(null);
    setUploadedFile3(null);
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
    updatedEditWorkFormData.append("work_title1", editWorkFormData.work_title1);
    updatedEditWorkFormData.append("work_title2", editWorkFormData.work_title2);
    updatedEditWorkFormData.append("work_title3", editWorkFormData.work_title3);
    updatedEditWorkFormData.append("user_id", editWorkFormData.user_id);
    updatedEditWorkFormData.append("files", uploadedFile1);
    updatedEditWorkFormData.append("files", uploadedFile2);
    updatedEditWorkFormData.append("files", uploadedFile3);

    try {
      await axios.post(`${API_URL}/work/upload`, updatedEditWorkFormData);
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
    <main className="editWork">
      <h2 className="editWork__title">FEATURED WORK SECTION:</h2>
      <form className="editWork__form" onSubmit={handleSubmit}>
        <section className="editWork__container">
          <PhotoUpload onFileChange={handleFileChange1}/>
          <article className="editWork__card">
            <label htmlFor="work_title1" className="editWork__label">
              TITLE:
            </label>
            <input
              type="text"
              name="work_title1"
              className="editWork__input"
              value={editWorkFormData.work_title1}
              onChange={handleChange}
              placeholder="Work Title"
            />
          </article>
        </section>
        <section className="editWork__container">
          <PhotoUpload onFileChange={handleFileChange2}/>
          <article className="editWork__card">
            <label htmlFor="work_title2" className="editWork__label">
              TITLE:
            </label>
            <input
              type="text"
              name="work_title2"
              className="editWork__input"
              value={editWorkFormData.work_title2}
              onChange={handleChange}
              placeholder="Work Title"
            />
          </article>
        </section>
        <section className="editWork__container">
          <PhotoUpload onFileChange={handleFileChange3}/>
          <article className="editWork__card">
            <label htmlFor="work_title3" className="editWork__label">
              TITLE:
            </label>
            <input
              type="text"
              name="work_title3"
              className="editWork__input"
              value={editWorkFormData.work_title3}
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
