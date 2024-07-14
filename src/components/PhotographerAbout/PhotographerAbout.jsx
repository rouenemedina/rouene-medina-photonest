import "./PhotographerAbout.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import getAboutDetailsData from "../../utils/getAboutDetailsData";


function PhotographerAbout({userId}) {
  const [aboutDetails, setAboutDetails] = useState(null);
  const [loadingWorkDetails, setLoadingWorkDetails] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getAboutDetails() {
      try {
        setAboutDetails(await getAboutDetailsData(userId));
        setLoadingWorkDetails(false);
      } catch (err) {
        console.log("Error fetching data", err);
        setError(true);
      }
    }
    getAboutDetails();
  }, []);

  if (loadingWorkDetails) {
    return <p> Loading Photographer's information... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  console.log(aboutDetails);
  return (
    <main>
      <section className="photographer">
        <article className="photographer__container">
          <div className="photographer__subcontainer">
            <img
              src={aboutDetails[0].about_url}
              alt="Photographer's Profile Photo"
              className="photographer__photo"
            ></img>
            <Link to="/portfolio">
              <h1 className="photographer__name">MEET "{aboutDetails[0].about_name}"</h1>
            </Link>
          </div>
          <div className="photographer__card">
            <p className="photographer__description">{aboutDetails[0].about_description}</p>
            <img
              src={aboutDetails[1].about_url}
              alt="Image"
              className="photographer__work"
            ></img>
          </div>
        </article>
      </section>
    </main>
  );
}

export default PhotographerAbout;
