import "./SignUpPage.scss";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import logoImg from "../../assets/logo/Logo-2.png";

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

  useEffect(() => {
    if (redirect) {
      navigate("/login");
    }
  }, [redirect, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    }
  };

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

  return (
    <main className="registration">
      <section>
        <img
          src={logoImg}
          alt="PhotoNest Logo"
          className="registration__logo"
        ></img>
      </section>
      <section className="registration__wrapper">
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
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            fields={["firstName", "lastName", "email", "password", "userType"]}
            errors={formErrors}
            formType="signup"
          />
        </article>
        {success && <div className="registration__message">Signed up!</div>}
        {error && <div className="resgistration__message">{error}</div>}
      </section>
    </main>
  );
}

export default SignUpPage;
