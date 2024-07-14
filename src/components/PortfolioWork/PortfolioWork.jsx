import "./PortfolioWork.scss";
import React, { useState, useEffect } from "react";
import getWorkDetailsData from "../../utils/getWorkDetailsData";

function PortfolioWork({userId}) {
  const [workDetails, setWorkDetails] = useState(null);
  const [loadingWorkDetails, setLoadingWorkDetails] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getWorkDetails() {
      try {
        setWorkDetails(await getWorkDetailsData(userId));
        setLoadingWorkDetails(false);
      } catch (err) {
        console.log("Error fetching data", err);
        setError(true);
      }
    }
    getWorkDetails();
  }, []);

  // useEffect(() => {
  //   if (workDetails && workDetails.work_url) {
  //     const img = new Image();
  //     img.src = workDetails.work_url;
  //     img.onload = () => {
  //       const aspectRatio = img.naturalWidth / img.naturalHeight;
  //       if (aspectRatio > 1) {
  //         setImageOrientation("landscape");
  //       } else {
  //         setImageOrientation("portrait");
  //       }
  //     };
  //   }
  // }, [workDetails]);

  if (loadingWorkDetails) {
    return <p> Loading Portfolio Work Details data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  if(!workDetails || workDetails.length === 0){
    return;
  }

  return (
    <>
      <section className="portfolio__work">
        <h1 className="portfolio__title">FEATURED WORK</h1>
        <section className="portfolio__container">
          {workDetails.map((work) => {
            return (
              <article className="portfolio__card">
                <img
                  src={work.work_url}
                  alt="featured work"
                  className="portfolio__img"
                ></img>
                <div className="portfolio__subcard">
                  <h3>{work.work_title}</h3>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default PortfolioWork;
