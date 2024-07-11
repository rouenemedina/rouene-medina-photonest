import PhotoUpload from "../PhotoUpload/PhotoUpload";
import "./EditHero.scss";
import React from "react";

//setup the forms
//handle the change when there is a user input
//handle submit or handle upload
//handle errors

function EditHero() {
  const handleChange = () => {};

  return (
    <main>
      <form>
        <PhotoUpload />
        <section className="">
          <label htmlFor="profile_description" className="">
            DESCRIPTION:
          </label>
          <textarea
            type="textarea"
            name="profile_description"
            className=""
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
