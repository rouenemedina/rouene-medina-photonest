import "./ContactPage.scss";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import img1 from "../../assets/images/b-stefen-tan-FWPu4IWk-wM-unsplash.jpg";

function ContactPage() {
  const [contactFormData, setContactFormData] = useState({
    contact_name: "",
    contact_email: "",
    contact_message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [redirect, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log("entered submit");
    event.preventDefault();

    const updatedContactFormData = {
      contact_name: contactFormData.contact_name,
      contact_email: contactFormData.contact_email,
      contact_message: contactFormData.contact_message,
    };

    try {
      const API_URL = import.meta.env.VITE_APP_API_URL;
      await axios.post(`${API_URL}/contact`, updatedContactFormData);
      setSuccess(true);
      setError(null);
      handleReset();
    } catch (err) {
      console.log(err);
      setSuccess(false);
      setError(error.response.data);
    }
  };

  const handleReset = () => {
    setContactFormData({
      contact_name: "",
      contact_email: "",
      contact_message: "",
    });
    setFormErrors({});
    setRedirect(true);
  };

  return (
    <>
      <Header />
      <main className="contact">
        <section className="contact__section">
          <article className="contact__container">
            <div className="contact__card">
              <h1 className="contact__title">Contact Us</h1>
            </div>
            <div className="contact__message">
            {success && <p className="contact__success">Message sent successfully! Redirecting...</p>}
            {error && <p className="contact__error">{error}</p>}
            </div>
          </article>
          <ContactForm
            contactFormData={contactFormData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            fields={["name", "email", "message"]}
            errors={formErrors}
          />
        </section>
        <section className="contact__feature">
          <img src={img1} alt="contact us" className="contact__img"></img>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
