import "./EditGallery.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PhotoUploadMultiple from "../PhotoUploadMultiple/PhotoUploadMultiple";
import Buttons from "../Buttons/Buttons";

const API_URL = import.meta.env.VITE_APP_API_URL;

function EditGallery({ userId }) {
  const [uploadedFiles, setUploadedFiles] = useState({
    userId: userId,
    files: [],
  });
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
    setUploadedFiles((prevState) => ({...prevState, files: files}));
  };

  const handleReset = () => {
    setUploadedFiles({ userId: userId, files: [] });
    setError(null);
    setSuccess(false);
    setRedirect(true);
  };

  const handleSubmit = async (event) => {
    console.log("entered submit");
    event.preventDefault();

    if (uploadedFiles.length === 0) {
      setError("Please select files to upload.");
      return;
    }

    const updatedEditGalleryData = new FormData();
    uploadedFiles.files.forEach((file) => {
      updatedEditGalleryData.append("files", file);
    });
    updatedEditGalleryData.append("user_id", uploadedFiles.userId)

    try {
      await axios.post(`${API_URL}/gallery/upload`, updatedEditGalleryData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
      <main className="editGallery">
        <h2 className="editGallery__title">GALLERY SECTION:</h2>
        <form className="editGallery__form" onSubmit={handleSubmit}>
          <PhotoUploadMultiple onFileChange={handleFileChange} />
          <Buttons showSubmit />
        </form>
      </main>
    </>
  );
}

export default EditGallery;
