import "./PortfolioGallery.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getGalleryDetailsData from "../../utils/getGalleryDetailsData";

function PortfolioGallery() {
  const [galleryDetails, setGalleryDetails] = useState(null);
  const [loadingGalleryDetails, setLoadingGalleryDetails] = useState(true);
  const [error, setError] = useState(false);
  const [imageOrientation, setImageOrientation] = useState("");
  const navigate = useNavigate();

  const userId = sessionStorage.getItem("photonest_user_id");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    async function getGalleryDetails() {
      try {
        setGalleryDetails(await getGalleryDetailsData(userId));

        setLoadingGalleryDetails(false);
      } catch (err) {
        console.log("Error fetching data", err);
        setError(true);
      }
    }
    getGalleryDetails();
  }, [userId, navigate]);

  if (loadingGalleryDetails) {
    return <p> Loading Galleries... </p>;
  }
  return (
    <main className="gallery">
      <section className="gallery__container">
        {galleryDetails.map((image) => {
          return (
            <img
            src={image.gallery_url}
            alt="gallery image"
            className="gallery__img"
            ></img>
          )
        })}
      </section>
    </main>
  );
}

export default PortfolioGallery;
