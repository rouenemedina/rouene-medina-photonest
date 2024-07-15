import "./HomePageHero.scss";
import React from "react";
import Buttons from "../Buttons/Buttons";

function Hero() {
  return (
    <main>
      <section className="hero">
        <article className="hero__container">
          <div className="hero__card">
            <h1 className="hero__title">
              Unveil Your Vision: PhotoNest Beckons
            </h1>
            <p className="hero__description">
              Dive into PhotoNest, a dynamic hub where photographers unveil
              their finest portfolios and clients discover visual storytellers
              ready to bring their projects to life. Whether you seek
              inspiration or a skilled professional, PhotoNest is your gateway
              to a world of captivating imagery. Join us now and elevate your
              photography journey!
            </p>
          </div>
          <div className="hero__btn">
            <Buttons showPrimary />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Hero;
