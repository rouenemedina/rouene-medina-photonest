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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {};

  return (
    <main>
      <form>
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
        <PhotoUpload />
      </form>
    </main>
  );
}

export default ProfileForm;
