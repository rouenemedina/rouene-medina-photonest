import "./PhotoUpload.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//POST endpoint from my server
//will return a url for the uploaded photo

//setup the edit form
//handle the change when there is a user file upload
//handle upload
//get the url for the uploaded photo
//preview the photo
//submit the edit form

const API_URL = import.meta.env.VITE_APP_API_URL;

function PhotoUpload({ onFileChange }) {
  const [uploadImageURL, setUploadImageURL] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    return () => {
      // Cleanup
      if(uploadImageURL) {
        URL.revokeObjectURL(uploadImageURL);
      }
    };
  }, [uploadImageURL]);

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const imageURL = URL.createObjectURL(file);
    setUploadImageURL(imageURL);
    onFileChange(file);
  };

  //assumption: only 1 file is uploaded
  const handleUpload = async () => {
    if (!imageFile) {
      console.log("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await axios.post(`${API_URL}/hero/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { imageURL } = response.data.url;
      setUploadImageURL(imageURL);
    } catch (err) {
      console.log("Error uploading image: ", err);
    }
  };

  return (
    <>
      <main>
        {uploadImageURL && (
          <section>
            <img src={uploadImageURL} alt="uploaded image" className="photoUpload__img"></img>
          </section>
        )}
        <input type="file" onChange={handleChange} />
      </main>
    </>
  );
}

export default PhotoUpload;
