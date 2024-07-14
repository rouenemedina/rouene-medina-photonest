import "./DashboardPage.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Buttons from "../../components/Buttons/Buttons";
import dashboardImg from "../../assets/images/z-dashboard.png";

const API_URL = import.meta.env.VITE_APP_API_URL;

function DashboardPage() {
  const [failedAuth, setFailedAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate("/login");
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
      navigate("/login");
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

  const resetPassword = () => {
    //logic to reset password
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
  console.log(user);

  //return the profile of the user (general: for photographers and clients);
  return (
    <>
      <Header />
      <main className="dashboard">
        <h2 className="dashboard__title">DASHBOARD</h2>
        <section className="dashboard__container">
          <article className="dashboard__subcontainer">
            <h1 className="dashboard__user">
              Hi, {user ? user.user_first_name : "Guest"}
            </h1>
            <h3 className="dashboard__description">
              What are we doing today?{" "}
            </h3>
          </article>
          <article className="dashboard__hero">
            <Link to="/portfolio">
              <Buttons showPortfolio />
            </Link>
            <img
              src={dashboardImg}
              alt="Dashboard Image"
              className="dashboard__img"
            ></img>
          </article>
          <article className="dashboard__card">
            <p>First Name: {user.user_first_name}</p>
            <p>Last Name: {user.user_last_name}</p>
            <p>Email: {user.user_email}</p>
            <div className="dashboard__subcard">
              <p>Forgot Password?</p>
              <button
                type="button"
                onClick={resetPassword}
                className="dashboard__reset"
              >
                RESET PASSWORD
              </button>
            </div>
          </article>
        </section>
        <form className="dashboard__form" onSubmit={handleSubmit}>
          <Buttons showLogOut onClick={logout} />
        </form>
      </main>
    </>
  );
}

export default DashboardPage;
