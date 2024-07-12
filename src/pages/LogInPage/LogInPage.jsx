import "./LogInPage.scss";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const API_URL = import.meta.env.VITE_APP_API_URL;

function LogInPage() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });
  //this is for handling errors in the form
  const [formErrors, setFormErrors] = useState({});
  //this is for errors in the axios call
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log("login clicked");
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        user_email: formData.user_email,
        user_password: formData.user_password,
      });

      sessionStorage.setItem("token", response.data.token);
      //TODO
      //sessionStorage.setItem("photonest_email", formData.user_email);

      setError(null);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response.data);
      // TODO: handle error message
      console.log(error);
    }
  };

  return (
    <>
      <main className="login">
        <section className="login__container">
          <h1 className="login__header">Welcome!</h1>
          <RegistrationForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            fields={["email", "password"]}
            errors={formErrors}
            formType="login"
          />
        </section>
      </main>
    </>
  );
}

export default LogInPage;
