import "./ProfileForm.scss";
import React, { useState } from "react";
import PhotoUpload from "../PhotoUpload/PhotoUpload";

function ProfileForm() {
  const [profile, setProfile] = useState({
    profile_photo: [],
    profile_name: "",
    profile_description: "",
    profile_feature: [],
  });

  //this is for the entire form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  //this one is for uploading image
  const handleUploadPhoto = (photoUrl) => {
    setProfile({ ...profile, profile_photo: [...profile.profile_photo, photoUrl] });
  };

  //TODO: axios call setup
  const handleSave = () => {};

  return (
    <main>
      <form>
        <PhotoUpload onUpload={handleUploadPhoto}/>
        <article className="">
          <label htmlFor="profile_name" className="">
            NAME:
          </label>
          <input
            type="text"
            name="profile_name"
            className=""
            placeholder="How should we call you?"
            value={profile.profile_name}
            onChange={handleChange}
            required
          ></input>
          {/* {errors.user_email && (
            <span id="emailError" class="form__error">
              {errors.user_email}
            </span>
          )} */}
        </article>
        <article className="">
          <label htmlFor="profile_description" className="">
            DESCRIPTION:
          </label>
          <textarea
            type="textarea"
            name="profile_description"
            className=""
            placeholder="Tell us about yourself."
            value={profile.profile_description}
            onChange={handleChange}
            required
          ></textarea>
          {/* {errors.user_email && (
            <span id="emailError" class="form__error">
              {errors.user_email}
            </span>
          )} */}
        </article>
        <PhotoUpload onUpload={handleUploadPhoto}/>
      </form>
    </main>
  );
}
//TODO: error handling in the forms
export default ProfileForm;
