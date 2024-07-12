import "./PortfolioContactSection.scss";
import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";

function PortfolioContactSection() {
  return (
    <>
      <main className="section__contact">
        <section className="section__container">
          <p className="section__description">
            "Let's create timeless memories together. I'd love to hear about
            your vision for your special day and capture it through my
            lens.Contact me today to begin our journey towards unforgettable
            moments."
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
