import "./EditAbout.scss";
import React from "react";
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Buttons from "../Buttons/Buttons";

function EditAbout() {
  return (
    <>
      <main className="editAbout">
        <h2>ABOUT SECTION:</h2>
        <form className="editAbout__form">
          <PhotoUpload />
          <section className="editAbout__container">
            <label htmlFor="about_name" className="editAbout__label">
              NAME:
            </label>
            <input
              type="text"
              name="about_name"
              className="editAbout__input"
              // value={editAboutFormData.about_name}
              // onChange={handleChange}
              placeholder="What should we call you?"
            />
          </section>
          <section className="editAbout__container">
            <label htmlFor="about_description" className="editAbout__label">
              DESCRIPTION:
            </label>
            <textarea
              type="textarea"
              name="about_description"
              className="editAbout__description"
              placeholder="Tell us about yourself and what you do."
              // value={editAboutFormData.about_description}
              // onChange={handleChange}
              required
            ></textarea>
            {/* {formErrors.about_description && (
              <span id="aboutDescriptionError" className="editAbout__error">
                {formErrors.about_description}
              </span>
            )} */}
          </section>
          <PhotoUpload />
          <Buttons showSubmit />
        </form>
      </main>
    </>
  );
}

export default EditAbout;
