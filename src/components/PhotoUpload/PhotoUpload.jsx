import "./PhotoUpload.scss";
import React, { useState } from "react";
import axios from "axios";
import Buttons from "../Buttons/Buttons";

//POST endpoint from my server
//image_title, image_description, category_id, user_id, image_tags, file
//will return a url for the uploaded photo

//setup the edit form
//handle the change when there is a user file upload
//handle upload
//get the url for the uploaded photo
//preview the photo
//submit the edit form

const API_URL = import.meta.env.VITE_APP_API_URL;

function PhotoUpload() {
  const [uploadImageURL, setUploadImageURL] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const imageURL = URL.createObjectURL(file);
    setUploadImageURL(imageURL);
  };

  //assumption: only 1 file is uploaded
  const handleUpload = async () => {
    if (!imageFile) {
      console.log("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    //TODO: axios call try/catch.
    try {
      const response = await axios.post(API_URL, formData, {
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
            <img src={uploadImageURL} alt="uploaded image"></img>
          </section>
        )}
        <input type="file" onChange={handleChange} />
      </main>
    </>
  );
}

export default PhotoUpload;
