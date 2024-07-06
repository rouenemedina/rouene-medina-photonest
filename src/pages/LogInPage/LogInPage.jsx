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
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        user_email: formData.user_email,
        user_password: formData.user_password,
      });

      sessionStorage.setItem("token", response.data.token);
      setError(null);
      navigate("");
    } catch (err) {
      setError(error.response.data);
    }
  };

  return (
    <main>
      <h1>Welcome!</h1>
      <RegistrationForm
        fields={["email", "password"]}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default LogInPage;
