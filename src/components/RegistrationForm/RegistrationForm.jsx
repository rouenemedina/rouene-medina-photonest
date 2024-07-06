import "./RegistrationForm.scss";
import Buttons from "../Buttons/Buttons";
import React from "react";

function RegistrationForm({ formData, handleChange, handleSubmit }) {
  return (
    <>
      <form className="form">
        <article className="form__container">
          <div className="form__subcontainer">
            <label htmlFor="user_first_name" className="form__label">
              First Name:
            </label>
            <input
              type="text"
              name="user_first_name"
              className="form__input"
              placeholder="First Name"
              value={formData.user_first_name}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form__subcontainer">
            <label htmlFor="user_last_name" className="form__label">
              Last Name:
            </label>
            <input
              type="text"
              name="user_last_name"
              className="form__input"
              placeholder="Last Name"
              value={formData.user_last_name}
              onChange={handleChange}
              required
            ></input>
          </div>
        </article>
        <article className="form__card">
          <label htmlFor="user_email" className="form__label">
            Email:
          </label>
          <input
            type="email"
            name="user_email"
            className="form__input"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          ></input>
        </article>
        <article className="form__card">
          <label htmlFor="user_password" className="form__label">
            Password:
          </label>
          <input
            type="password"
            name="user_password"
            className="form__input"
            placeholder="Password"
            value={formData.user_password}
            onChange={handleChange}
            required
          ></input>
        </article>
        <article className="form__card">
          <label htmlFor="" className="form__label">
            Password:
          </label>
          <select
            type="dropdown"
            name="user_type"
            className="form__input"
            value={formData.user_type}
            onChange={handleChange}
            required
          >
            <option value="photographer">Photographer</option>
            <option value="client">Client</option>
          </select>
        </article>
        <article className="form__container"></article>
        <article className="form__btn">
          <Buttons showSignUp type="submit" onChange={handleSubmit}/>
          <Buttons showLogIn type="submit" onChange={handleSubmit}/>
        </article>
      </form>
    </>
  );
}

export default RegistrationForm;
