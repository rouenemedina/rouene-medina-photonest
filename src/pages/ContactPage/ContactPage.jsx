import "./ContactPage.scss";
import axios from "axios";
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
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log("entered submit");
    event.preventDefault();

    //TODO: data validation

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
        
        //TODO:
        // create function to display successful message submission
        // add timeout before redirect


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
