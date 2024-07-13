import "./PortfolioContactSection.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import getConnectDetailsData from "../../utils/getConnectDetailsData";

function PortfolioContactSection() {
  const [connectDetails, setConnectDetails] = useState(null);
  const [loadingConnectDetails, setLoadingConnectDetails] = useState(true);
  const [error, setError] = useState(false);
  const [imageOrientation, setImageOrientation] = useState("");
  const navigate = useNavigate();

  const userId = sessionStorage.getItem("photonest_user_id");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    async function getConnectDetails() {
      try {
        setConnectDetails(await getConnectDetailsData(userId));
        setLoadingConnectDetails(false);
      } catch (err) {
        console.log("Error fetching data", err);
        setError(true);
      }
    }
    getConnectDetails();
  }, [userId, navigate]);

  if (loadingConnectDetails) {
    return <p> Loading Connect Details data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  return (
    <>
      <main className="connect">
        <section className="connect__container">
          <img
            src={connectDetails.connect_url}
            alt="featured photo"
            className="connect__background"
          ></img>
        </section>
        <section className="connect__card">
          <p className="connect__description">
            {connectDetails.connect_description}
          </p>
          <Link to="/contact">
            <Buttons showContact />
          </Link>
        </section>
      </main>
    </>
  );
}

export default PortfolioContactSection;
