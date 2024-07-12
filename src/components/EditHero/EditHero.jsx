import PhotoUpload from "../PhotoUpload/PhotoUpload";
import "./EditHero.scss";
import React from "react";
import { useState } from "react";

//setup the forms
//handle the change when there is a user input
//handle submit or handle upload
//handle errors

function EditHero({handleChange}) {
  return (
    <main>
      <form className="editHero">
        <PhotoUpload />
        <section className="editHero__container">
          <label htmlFor="hero_description" className="editHero__label">
            DESCRIPTION:
          </label>
          <textarea
            type="textarea"
            name="hero_description"
            className="editHero__description"
            placeholder="Tell us about yourself."
            // value={}
            onChange={handleChange}
            required
          ></textarea>
          {/* {errors.user_email && (
            <span id="emailError" class="form__error">
              {errors.user_email}
            </span>
          )} */}
        </section>
      </form>
    </main>
  );
}

export default EditHero;
