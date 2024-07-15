import "./PortfolioGallery.scss";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import getGalleryDetailsData from "../../utils/getGalleryDetailsData";

Modal.setAppElement("#root");

function PortfolioGallery({ userId }) {
  const [galleryDetails, setGalleryDetails] = useState(null);
  const [loadingGalleryDetails, setLoadingGalleryDetails] = useState(true);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  if (loadingGalleryDetails) {
    return <p> Loading Galleries... </p>;
  }

  if (error) {
    return <p>Error loading galleries. Please try again later.</p>;
  }

  if (!galleryDetails || galleryDetails.length === 0) {
    return;
  }

  return (
    <main className="gallery">
      <section className="gallery__container">
        {galleryDetails.map((image, index) => {
          return (
            <img
              key={index}
              src={image.gallery_url}
              alt="gallery image"
              className="gallery__img"
              onClick={() => openModal(image.gallery_url)}
            ></img>
          );
        })}
      </section>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Full Size" />
          </div>
        </div>
      )}
    </main>
  );
}

export default PortfolioGallery;
