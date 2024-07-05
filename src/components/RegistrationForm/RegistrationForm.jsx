import "./RegistrationForm.scss";
import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";

function RegistrationForm() {
  return (
    <>
      <form className="form">
        <article className="form__container">
          <div className="form__subcontainer">
            <label htmlFor="" className="form__label">
              First Name:
            </label>
            <input
              type="text"
              id=""
              className="form__input"
              placeholder="First Name"
              required
            ></input>
          </div>
          <div className="form__subcontainer">
            <label htmlFor="" className="form__label">
              Last Name:
            </label>
            <input
              type="text"
              id=""
              className="form__input"
              placeholder="Last Name"
              required
            ></input>
          </div>
        </article>
        <article className="form__card">
          <label htmlFor="" className="form__label">
            Email:
          </label>
          <input
            type="text"
            id=""
            className="form__input"
            placeholder="Email"
            required
          ></input>
        </article>
        <article className="form__card">
          <label htmlFor="" className="form__label">
            Password:
          </label>
          <input
            type="text"
            id=""
            className="form__input"
            placeholder="Password"
            required
          ></input>
        </article>
        {/* <article className="form__card">
          <label htmlFor="" className="form__label">
            Password:
          </label>
          <input
            type="dropdown"
            id=""
            className="form__input"
            placeholder="Password"
            required
          ></input>
        </article> */}
        <article className="form__container">
        <Link to="/">
          <Buttons showSignUp className="form__btn" />
        </Link>
          <Buttons showLogIn className="form__btn" />
        </article>
      </form>
    </>
  );
}

export default RegistrationForm;
