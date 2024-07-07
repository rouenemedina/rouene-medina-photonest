import "./PhotographersSection.scss";
import React from "react";
import PhotoImg1 from "../../assets/images/daniel-lincoln-NR705beN_CU-unsplash.jpg";
import WorkImg1 from "../../assets/images/nick-karvounis-6vwrVGrxOKE-unsplash.jpg";
function PhotographersSection() {
  return (
    <main>
      <section className="photographer">
        <article className="photographer__container">
          <div className="photographer__subcontainer">
            <img
              src={PhotoImg1}
              alt="Photographer's Profile Photo"
              className="photographer__photo"
            ></img>
            <h2 className="photographer__name">MEET "photographer's name"</h2>
          </div>
          <div className="photographer__card">
            <p className="photographer__description">Hello, I'm Jason Smith, and I live for capturing the essence of weddings through my lens. With a deep passion for storytelling and an eye for detail, I strive to immortalize every heartfelt moment and intricate detail of your special day. From the intimate glances to the grand celebrations, I aim to preserve the emotions and beauty that make your wedding truly unforgettable. Join me on a journey through my portfolio, where each photograph tells a unique story of love, joy, and timeless elegance.</p>
            <img src={WorkImg1} alt="Image" className="photographer__work"></img>
          </div>
        </article>
      </section>
      <section>
      </section>
      <section></section>
    </main>
  );
}

export default PhotographersSection;
