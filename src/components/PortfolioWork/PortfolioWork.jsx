import "./PortfolioWork.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getWorkDetailsData from "../../utils/getWorkDetailsData";

function PortfolioWork() {
  const [workDetails, setWorkDetails] = useState(null);
  const [loadingWorkDetails, setLoadingWorkDetails] = useState(true);
  const [error, setError] = useState(false);
  const [imageOrientation, setImageOrientation] = useState("");
  const navigate = useNavigate();

  const userId= sessionStorage.getItem("photonest_user_id");

  useEffect(() => {
    if(!userId){
      navigate("/login");
      return;
    }

    async function getWorkDetails() {
        try{
            setWorkDetails(await getWorkDetailsData(userId));
            setLoadingWorkDetails(false);
        } catch(err){
            console.log("Error fetching data", err)
            setError(true);
        }
    }
    getWorkDetails();
  }, [userId, navigate]);

  return (
    <>
      <section className="portfolio__work">
        <h1 className="portfolio__title">Celebrating Timeless Love</h1>
        <section className="portfolio__container">
          <article className="portfolio__card">
            <img
              //   src={}
              alt="featured work"
              className="portfolio__img"
            ></img>
            <div className="portfolio__subcard">
              <h3>TITLE</h3>
            </div>
          </article>
          <article className="portfolio__card">
            <img
              //   src={}
              alt="featured work"
              className="portfolio__img"
            ></img>
            <div className="portfolio__subcard">
              <h3>TITLE</h3>
            </div>
          </article>
          <article className="portfolio__card">
            <img
              //   src={}
              alt="featured work"
              className="portfolio__img"
            ></img>
            <div className="portfolio__subcard">
              <h3>TITLE</h3>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default PortfolioWork;
