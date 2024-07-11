import "./DashboardPage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Buttons from "../../components/Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_API_URL;

function DashboardPage() {
  const [failedAuth, setFailedAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/");
    }
  }, [redirect, navigate]);

  useEffect(() => {
    if (failedAuth) {
      setRedirect(true);
    }
  }, [failedAuth]);

  //login
  //logout
  const login = async () => {
    //check if there is a token
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }
    //get token
    try {
      const response = await axios.get(`${API_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("entered login");
      console.log(response.data);
      setUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setFailedAuth(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    login();
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  const handleSubmit = async (event) => {
    console.log("logout button clicked");
    event.preventDefault();
    logout();
    navigate("/login");
  };

  if (isLoading) {
    return (
      <main>
        <section>
          <p>Loading...</p>
        </section>
      </main>
    );
  }

  //return the profile of the user (general: for photographers and clients);
  return (
    <>
      <Header />
      <main>
        <h2>DASHBOARD</h2>
        <section>
          <article>
            <h1>Hi, {user ? user.name : "Guest"}</h1>
            <h3>What are we doing today? </h3>
          </article>
          <article></article>
        </section>
        <form className="dashboard__form" onSubmit={handleSubmit}>
          <Buttons showLogOut onClick={logout} />
        </form>
      </main>
    </>
  );
}

export default DashboardPage;
