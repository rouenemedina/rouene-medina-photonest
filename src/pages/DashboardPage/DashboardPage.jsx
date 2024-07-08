import "./DashboardPage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

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
    } catch(err) {
        console.log(err);
        setFailedAuth(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    login();
  }, []);

  if(failedAuth) {
    return (
        <main>
            <section>
                
            </section>
        </main>
    )
  }

  //return the profile of the user (general: for photographers and clients);
  return (
    <main>
      <Header />
      <h2>DASHBOARD</h2>
      <section>
      <h1>Hi, </h1>
      <h3>What are we doing today? </h3>
      </section>
    </main>
  );
}

export default DashboardPage;
