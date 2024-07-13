import "./EditGallery.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUploadMultiple from "../PhotoUploadMultiple/PhotoUploadMultiple";
import Buttons from "../Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditGallery() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/portfolio");
    }
  }, [redirect, navigate]);

  const handleFileChange = (files) => {
    setUploadedFiles(files);
  }

  const handleReset = () => {
    setUploadedFiles([]);
    setError(null);
    setSuccess(false);
    setRedirect(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (uploadedFiles.length === 0) {
      setError("Please select files to upload.");
      return;
    }

    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      await axios.post(`${API_URL}/${formType}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess(true);
      setError(null);
      handleReset();
    } catch (err) {
      console.log(err);
      setSuccess(false);
      setError("Error uploading files. Please try again.");
    }
  };

  return (
    <>
      <main className="editGallery">
        <h2 className="editGallery__title">Edit Gallery:</h2>
        <form className="editGallery__form" onSubmit={handleSubmit}>
          <PhotoUploadMultiple onFileChange={handleFileChange}/>
          <Buttons showSubmit />
        </form>
      </main>
    </>
  );
}

export default EditGallery;
