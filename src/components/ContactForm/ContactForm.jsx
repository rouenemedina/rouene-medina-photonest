import Buttons from "../Buttons/Buttons";
import "./ContactForm.scss";
import React from "react";

function ContactForm({
  contactFormData,
  handleChange,
  handleSubmit,
  fields = [],
  errors,
}) {
  const displayName = fields.includes("name");
  const displayEmail = fields.includes("email");
  const displayMessage = fields.includes("message");

  return (
    <main className="contactForm__wrapper">
      <form className="contactForm" onSubmit={handleSubmit}>
        <article className="contactForm__container">
          {displayName && (
            <div className="contactForm__subcontainer">
              <label htmlFor="contact_name" className="contactForm__label">
                Name:
              </label>
              <input
                type="text"
                name="contact_name"
                className="contactForm__input"
                placeholder="First and Last Name"
                value={contactFormData.contact_name}
                onChange={handleChange}
                required
              ></input>
              {errors.contact_name && (
                <span class="form__error">{errors.contact_name}</span>
              )}
            </div>
          )}

          {displayEmail && (
            <div className="contactForm__subcontainer">
              <label htmlFor="contact_email" className="contactForm__label">
                Email:
              </label>
              <input
                type="email"
                name="contact_email"
                className="contactForm__input"
                placeholder="youremail@email.ca"
                value={contactFormData.contact_email}
                onChange={handleChange}
                required
              ></input>
              {errors.contact_email && (
                <span class="form__error">{errors.contact_email}</span>
              )}
            </div>
          )}

          {displayMessage && (
            <div className="contactForm__subcontainer">
              <label htmlFor="contact_message" className="contactForm__label">
                Message:
              </label>
              <textarea
                name="contact_message"
                className="contactForm__input contactForm__input--text"
                placeholder="Write your message here."
                value={contactFormData.contact_message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.contact_message && (
                <span class="form__error">{errors.contact_message}</span>
              )}
            </div>
          )}
        </article>
        <div className="contactForm__btn">
            <Buttons showSecondary />
            <Buttons showSubmit />
          </div>
      </form>
    </main>
  );
}

export default ContactForm;
