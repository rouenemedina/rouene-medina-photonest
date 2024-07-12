import "./PhotographersSection.scss";
import React from "react";
import PhotoImg1 from "../../assets/images/christopher-campbell-Xo4YvBp6IBM-unsplash.jpg";
import WorkImg1 from "../../assets/images/dmitry-schemelev-OEnKKXvdbDU-unsplash.jpg";
import { Link } from "react-router-dom";

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
            <Link to="/portfolio">
              <h1 className="photographer__name">MEET "Nick"</h1>
            </Link>
          </div>
          <div className="photographer__card">
            <p className="photographer__description">
              Hello, I'm Nick Smith, and I live for capturing the essence of
              weddings through my lens. With a deep passion for storytelling and
              an eye for detail, I strive to immortalize every heartfelt moment
              and intricate detail of your special day. From the intimate
              glances to the grand celebrations, I aim to preserve the emotions
              and beauty that make your wedding truly unforgettable. Join me on
              a journey through my portfolio, where each photograph tells a
              unique story of love, joy, and timeless elegance.
            </p>
            <img
              src={WorkImg1}
              alt="Image"
              className="photographer__work"
            ></img>
          </div>
        </article>
      </section>
      {/* <section>
      </section> */}
      <section></section>
    </main>
  );
}

export default PhotographersSection;
