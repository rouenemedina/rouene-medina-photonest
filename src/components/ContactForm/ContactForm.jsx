import "./ContactForm.scss";
import React from "react";

function ContactForm({
  contactFormData,
  handleChange,
  handleSubmit,
  fields = [],
  errors,
}) {
  const displayFirstName = fields.includes("firstName");
  const displayLastName = fields.includes("lastName");
  const displayEmail = fields.includes("email");
  const displayMessage = fields.includes("message");

  return (
    <main>
      <form className="contactForm">
        <article className="contactForm__container">
          {displayFirstName && (
            <div className="contactForm__subcontainer">
              <label
                htmlFor="contact_first_name"
                className="contactForm__label"
              >
                First Name:
              </label>
              <input
                type="text"
                name="contact_first_name"
                className="contactForm__input"
                placeholder="First Name"
                value={contactFormData.contact_first_name}
                onChange={handleChange}
                required
              ></input>
              {errors.contact_first_name && (
                <span class="form__error">
                  {errors.contact_first_name}
                </span>
              )}
            </div>
          )}

          {displayLastName && (
            <div className="contactForm__subcontainer">
              <label
                htmlFor="contact_last_name"
                className="contactForm__label"
              >
                Last Name:
              </label>
              <input
                type="text"
                name="contact_last_name"
                className="contactForm__input"
                placeholder="Last Name"
                value={contactFormData.contact_last_name}
                onChange={handleChange}
                required
              ></input>
              {errors.contact_last_name && (
                <span class="form__error">
                  {errors.contact_last_name}
                </span>
              )}
            </div>
          )}

          {displayEmail && (
            <div className="contactForm__subcontainer">
              <label
                htmlFor="contact_email"
                className="contactForm__label"
              >
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
                <span class="form__error">
                  {errors.contact_email}
                </span>
              )}
            </div>
          )}

          {displayMessage && (
            <div className="contactForm__subcontainer">
              <label
                htmlFor="contact_message"
                className="contactForm__label"
              >
                Email:
              </label>
              <textarea
                name="contact_message"
                className="contactForm__input"
                placeholder="Write your message here."
                value={contactFormData.contact_message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.contact_message && (
                <span class="form__error">
                  {errors.contact_message}
                </span>
              )}
            </div>
          )}
        </article>
      </form>
    </main>
  );
}

export default ContactForm;
