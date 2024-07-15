import "./PhotographerPage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAllABoutData from "../../utils/getAllAboutData";
import Header from "../../components/Header/Header";

function PhotographerPage() {
  const [photographerList, setPhotographerList] = useState(null);
  const [loadingListDetails, setLoadingListDetails] = useState(true);
  const [error, setError] = useState(false);
  const [imageOrientation, setImageOrientation] = useState("");

  useEffect(() => {
    async function getListDetails() {
      try {
        setPhotographerList(await getAllABoutData());
        setLoadingListDetails(false);
      } catch (err) {
        console.log("Error fetching data", err);
        setError(true);
      }
    }
    getListDetails();
  }, []);

  useEffect(() => {
    if (photographerList && photographerList.about_url) {
      const img = new Image();
      img.src = photographerList.about_url;
      img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        if (aspectRatio > 1) {
          setImageOrientation("landscape");
        } else {
          setImageOrientation("portrait");
        }
      };
    }
  }, []);

  if (loadingListDetails) {
    return <p> Loading Photographer's information... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  if (photographerList.length === 0) {
    return;
  }

  return (
    <>
      <div className="list__wrapper">
        <Header />
        <main>
          <section className="list">
            <article className="list__container">
              {photographerList.map((photographer) => {
                return (
                  <div key={photographer.about_id} className="list__card">
                    <img
                      src={photographer.about_url}
                      alt="Photographer's Profile Photo"
                      className={`list__img list__img--${imageOrientation}`}
                    ></img>
                    <Link
                      to={`/photographers/${photographer.user_id}`}
                      className="list__link"
                    >
                      <h2 className="list__name">{photographer.about_name}</h2>
                    </Link>
                    <p className="list__description">
                      {photographer.about_description}
                    </p>
                  </div>
                );
              })}
            </article>
          </section>
        </main>
      </div>
    </>
  );
}

export default PhotographerPage;
