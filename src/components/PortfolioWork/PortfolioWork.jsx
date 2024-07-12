import "./PortfolioWork.scss";
import React from "react";

function PortfolioWork() {
  return (
    <>
      <section className="portfolio__work">
        <h1 className="portfolio__title">Celebrating Timeless Love</h1>
        <section className="portfolio__container">
          <article className="portfolio__card">
            <img
              src={img2}
              alt="featured work"
              className="portfolio__img"
            ></img>
            <div className="portfolio__subcard">
              <h3>TITLE</h3>
              <h3>DATE</h3>
            </div>
          </article>
          <article className="portfolio__card">
            <img
              src={img3}
              alt="featured work"
              className="portfolio__img"
            ></img>
            <div className="portfolio__subcard">
              <h3>TITLE</h3>
              <h3>DATE</h3>
            </div>
          </article>
          <article className="portfolio__card">
            <img
              src={img4}
              alt="featured work"
              className="portfolio__img"
            ></img>
            <div className="portfolio__subcard">
              <h3>TITLE</h3>
              <h3>DATE</h3>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default PortfolioWork;
