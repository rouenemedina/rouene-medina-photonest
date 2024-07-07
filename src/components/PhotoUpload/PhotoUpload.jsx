import "./PhotoUpload.scss";
import React, { useState } from "react";
import axios from "axios";
import Buttons from "../Buttons/Buttons";

function PhotoUpload() {
  const [uploadImage, setUploadImage] = useState([]);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  //assumption: only 1 file is uploaded
  const handleUpload = async () => {
    if(!image) {
        return;
    }

    //TODO: axios call try/catch

  }

  return (
    <>
      <main>
        {image && (
          <section>
            <img src={image} alt="uploaded photo"></img>
            <Buttons
              showSecondary
              onClick={() => {
                setImage(null);
              }}
            />
          </section>
        )}
        <input type="file" onChange={handleChange} />
      </main>
    </>
  );
}

export default PhotoUpload;
