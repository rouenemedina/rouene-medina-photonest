import "./PhotoUploadMultiple.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

function PhotoUploadMultiple({ onFileChange, formType }) {
  const [uploadImageURLs, setUploadImageURLs] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    return () => {
      // Cleanup
      uploadImageURLs.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [uploadImageURLs]);

  const handleChange = (event) => {
    const files = event.target.files;
    const newFiles = Array.from(files);
    setImageFiles([...imageFiles, ...newFiles]);

    const newImageURLs = newFiles.map((file) => URL.createObjectURL(file));
    setUploadImageURLs([...uploadImageURLs, ...newImageURLs]);

    onFileChange([...imageFiles, ...newFiles]);
  };

  const handleUpload = async () => {
    if (imageFiles.length === 0) {
      console.log("No files selected.");
      return;
    }

    const formData = new FormData();
    imageFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(
        `${API_URL}/${formType}/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const { imageURLs } = response.data;
      setUploadImageURLs(imageURLs);
    } catch (err) {
      console.log("Error uploading images: ", err);
    }
  };

  return (
    <>
      <main>
        {uploadImageURLs.map((url, index) => (
          <section key={index}>
            <img
              src={url}
              alt={`uploaded image ${index}`}
              className="photoUpload__img"
            />
          </section>
        ))}
        <input type="file" onChange={handleChange} multiple />
      </main>
    </>
  );
}

export default PhotoUploadMultiple;
