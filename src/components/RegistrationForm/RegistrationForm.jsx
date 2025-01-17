import "./RegistrationForm.scss";
import Buttons from "../Buttons/Buttons";
import React from "react";

function RegistrationForm({
  formData,
  handleChange,
  handleSubmit,
  fields = [],
  errors,
  formType,
}) {
  const displayFirstName = fields.includes("firstName");
  const displayLastName = fields.includes("lastName");
  const displayEmail = fields.includes("email");
  const displayPassword = fields.includes("password");
  const displayUserType = fields.includes("userType");

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="form__wrapper">
          <article className="form__container">
            {displayFirstName && (
              <div className="form__subcontainer">
                <label htmlFor="user_first_name" className="form__label">
                  First Name:
                </label>
                <input
                  type="text"
                  name="user_first_name"
                  className={`form__input ${
                    errors.user_first_name ? "form__input--error" : ""
                  }`}
                  placeholder="First Name"
                  value={formData.user_first_name}
                  onChange={handleChange}
                  required
                ></input>
                {errors.user_first_name && (
                  <span id="firstNameError" class="form__error">
                    {errors.user_first_name}
                  </span>
                )}
              </div>
            )}
            {displayLastName && (
              <div className="form__subcontainer">
                <label htmlFor="user_last_name" className="form__label">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="user_last_name"
                  className={`form__input ${
                    errors.user_last_name ? "form__input--error" : ""
                  }`}
                  placeholder="Last Name"
                  value={formData.user_last_name}
                  onChange={handleChange}
                  required
                ></input>
                {errors.user_last_name && (
                  <span id="lastNameError" class="form__error">
                    {errors.user_last_name}
                  </span>
                )}
              </div>
            )}
          </article>

          {displayEmail && (
            <article className="form__card">
              <label htmlFor="user_email" className="form__label">
                Email:
              </label>
              <input
                type="email"
                name="user_email"
                className={`form__input ${
                  errors.user_email ? "form__input--error" : ""
                }`}
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}
                required
              ></input>
              {errors.user_email && (
                <span id="emailError" class="form__error">
                  {errors.user_email}
                </span>
              )}
            </article>
          )}

          {displayPassword && (
            <article className="form__card">
              <label htmlFor="user_password" className="form__label">
                Password:
              </label>
              <input
                type="password"
                name="user_password"
                className={`form__input ${
                  errors.user_password ? "form__input--error" : ""
                }`}
                placeholder="Password"
                value={formData.user_password}
                onChange={handleChange}
              ></input>
              {errors.user_password && (
                <span id="passwordError" class="form__error">
                  {errors.user_password}
                </span>
              )}
            </article>
          )}

          {displayUserType && (
            <article className="form__card">
              <label htmlFor="user_type" className="form__label">
                User Type:
              </label>
              <select
                type="dropdown"
                name="user_type"
                className={`form__input form__input--select ${
                  errors.user_type ? "form__input--error" : ""
                }`}
                value={formData.user_type}
                onChange={handleChange}
                required
              >
                <option value="photographer">Photographer</option>
                <option value="client">Client</option>
              </select>
              {errors.user_type && (
                <span id="typeError" class="form__error">
                  {errors.user_type}
                </span>
              )}
            </article>
          )}
        </section>
        <section className="form__btn">
          {formType === "signup" ? (
            <Buttons showSignUp type="submit" />
          ) : formType === "login" ? (
            <Buttons showLogIn type="submit" />
          ) : null}
        </section>
      </form>
    </>
  );
}

export default RegistrationForm;
