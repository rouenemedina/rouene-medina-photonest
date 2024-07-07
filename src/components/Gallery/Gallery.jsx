import "./Gallery.scss";
import React from "react";
import img1 from "../../assets/images/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg";
import img2 from "../../assets/images/jonathan-borba-eg-72fI9wK4-unsplash.jpg";
import img3 from "../../assets/images/samantha-gades-7JUDLPlA114-unsplash.jpg";
import img4 from "../../assets/images/sandy-millar-8vaQKYnawHw-unsplash.jpg";
import img5 from "../../assets/images/vadim-paripa-PuXtB1B4zL8-unsplash.jpg";
import img6 from "../../assets/images/irina-iriser-Xu5h9W--N4k-unsplash.jpg";
import img7 from "../../assets/images/katelyn-macmillan-ExjpauryqzA-unsplash.jpg";
import img8 from "../../assets/images/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg";

function Gallery() {
  return (
    <main>
      <section className="gallery">
        <img src={img1} alt="gallery image" className="gallery__img"></img>
        <img src={img2} alt="gallery image" className="gallery__img"></img>
        <img src={img3} alt="gallery image" className="gallery__img"></img>
        <img src={img4} alt="gallery image" className="gallery__img"></img>
        <img src={img5} alt="gallery image" className="gallery__img"></img>
        <img src={img6} alt="gallery image" className="gallery__img"></img>
        <img src={img7} alt="gallery image" className="gallery__img"></img>
        <img src={img8} alt="gallery image" className="gallery__img"></img>
      </section>
    </main>
  );
}

export default Gallery;
