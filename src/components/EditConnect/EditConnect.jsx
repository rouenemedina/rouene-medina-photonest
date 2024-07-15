import "./EditConnect.scss";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Buttons from "../Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditConnect({ userId }) {
  const [editConnectFormData, setEditConnectFormData] = useState({
    connect_description: "",
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
    setEditConnectFormData({ ...editConnectFormData, [name]: value });
  };

  const handleFileChange = (file) => {
    setUploadedFile(file);
  };

  const handleReset = () => {
    setEditConnectFormData({
      connect_description: "",
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
    if (!value.connect_description) {
      errors.connect_description = "Please fill out the required field.";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validate(editConnectFormData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({});
    }

    const updatedEditConnectFormData = new FormData();
    updatedEditConnectFormData.append(
      "connect_description",
      editConnectFormData.connect_description
    );
    updatedEditConnectFormData.append("user_id", editConnectFormData.user_id);
    updatedEditConnectFormData.append("file", uploadedFile);

    try {
      await axios.post(`${API_URL}/connect/upload`, updatedEditConnectFormData);
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
    <main className="editConnect">
      <h2 className="editConnect__title">CONNECT SECTION:</h2>
      <form className="editConnect__form" onSubmit={handleSubmit}>
        <PhotoUpload onFileChange={handleFileChange} />
        <section className="editConnect__container">
          <label htmlFor="connect_description" className="editConnect__label">
            DESCRIPTION:
          </label>
          <textarea
            type="textarea"
            name="connect_description"
            className="editConnect__description"
            placeholder="Enter image description."
            value={editConnectFormData.connect_description}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.connect_description && (
            <span className="editConnect__error">
              {formErrors.connect_description}
            </span>
          )}
        </section>
        <Buttons showSubmit />
      </form>
    </main>
  );
}

export default EditConnect;
