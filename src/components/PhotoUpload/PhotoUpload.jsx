import "./PhotoUpload.scss";
import React, { useState, useEffect } from "react";

function PhotoUpload({ onFileChange }) {
  const [uploadImageURL, setUploadImageURL] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    return () => {
      // Cleanup
      if (uploadImageURL) {
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

  return (
    <>
      <main>
        {uploadImageURL && (
          <section>
            <img
              src={uploadImageURL}
              alt="uploaded image"
              className="photoUpload__img"
            ></img>
          </section>
        )}
        <input type="file" onChange={handleChange} />
      </main>
    </>
  );
}

export default PhotoUpload;
