import "./DashboardPage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Buttons from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_API_URL;

function DashboardPage() {
  const [failedAuth, setFailedAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
          Authorization: "Bearer" + token,
        },
      });
      console.log(response.data);
      setUser(response.data);
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

  //TODO: design the pages below
  if (failedAuth) {
    return (
      <main className="failedAuth">
        <section className="failedAuth__container">
          <h1 className="failedAuth__title">Log In to PhotoNest</h1>
          <h2 className="failedAuth__description">Not yet a member?</h2>
          <Link to="/">
            <p className="failedAuth__redirect">Sign Up</p>
          </Link>
        </section>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <section>
            
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
            <h1>Hi, </h1>
            <h3>What are we doing today? </h3>
          </article>
          <article></article>
        </section>
        <Buttons showLogOut onClick={logout} />
      </main>
    </>
  );
}

export default DashboardPage;
