import "./SignUpPage.scss";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function SignUpPage() {
  const [formData, setFormData] = useState({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_password: "",
    user_type: "photographer",
  });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //after submitting we want to check the data if its valid
    //then updated formData to be sent to the server
    const errorOutput = validateFormData(formData);
    if (Object.keys(errorOutput).length === 0) {
      try {
        const updatedFormData = {
          user_first_name: formData.user_first_name,
          user_last_name: formData.user_last_name,
          user_email: formData.user_email,
          user_password: formData.user_password,
          user_type: formData.user_type,
        };
        const API_URL = import.meta.env.VITE_APP_API_URL;
        await axios.post(`${API_URL}/auth/register`, updatedFormData);
        setSuccess(true);
        setError(null);
        handleReset();
      } catch (err) {
        console.log(err);
        setSuccess(false);
        setError(error.response.data);
      }
    } else {
      //TODO: error handling
    }
  };

  //validate formData
  const validateFormData = (data) => {
    const errors = {};
    if (!data.user_first_name)
      errors.user_first_name = "Please enter your first name.";
    if (!data.user_last_name)
      errors.user_last_name = "Please enter your last name.";
    if (!data.user_email)
      errors.user_email = "Please enter your email address.";
    if (!data.user_password) errors.user_password = "Please enter a password.";
    if (!data.user_type)
      errors.user_type = "Please specify what you want to be.";

    setFormErrors(errors);
    return errors;
  };

  const handleReset = () => {
    setFormData({
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      user_password: "",
      user_type: "photographer",
    });
    setFormErrors({});
    setRedirect(true);
  };

  if (redirect) {
    navigate("/login");
  }

  return (
    <main>
      <section className="registration">
        <article className="registration__container">
          <div className="registration__subcontainer">
            <h1 className="registration__title">CREATE NEW ACCOUNT</h1>
            <div className="registration__card">
              <h3 className="registration__subtitle">Already a member? </h3>
              <Link to="/login" className="registration__link">
                <h3 className="registration__login">Log In</h3>
              </Link>
            </div>
          </div>
        </article>
        <article className="registration__form">
          <RegistrationForm
            fields={["firstName", "lastName", "email", "password", "userType"]}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </article>
        {success && <div className="registration__message">Signed up!</div>}
        {error && <div className="resgistration__message">{error}</div>}
      </section>
    </main>
  );
}

export default SignUpPage;
