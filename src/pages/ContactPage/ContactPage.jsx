import "./ContactPage.scss";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";

function ContactPage() {
  const [contactFormData, setContactFormData] = useState({
    contact_name: "",
    contact_email: "",
    contact_message: "",
  });
  //this is for handling errors in the form
  const [formErrors, setFormErrors] = useState({});
  //this is for errors in the axios call
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/home");
    }
  }, [redirect, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //axios call
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
      <main>
        <ContactForm
          contactFormData={contactFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          fields={["name", "email", "message"]}
          errors={formErrors}
        />
      </main>
    </>
  );
}

export default ContactPage;
