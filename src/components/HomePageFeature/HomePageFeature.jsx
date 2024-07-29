import "./HomePageFeature.scss";
import React from "react";
import featureImg from "../../assets/images/b-kevin-lanceplaine-sO-JmQj95ec-unsplash.jpg";

function HomePageFeature() {
  return (
    <>
      <main className="homeFeature">
        <section className="homeFeature__container">
          <img
            src={featureImg}
            alt="Featured Work"
            className="homeFeature__img"
          ></img>
          <h2 className="homeFeature__description">
            "Photography is the art of capturing fleeting moments and turning
            them into timeless memories. Every photo tells a story, and through
            your lens, the world can see the beauty, emotion, and uniqueness of
            each captured moment. Let your creativity shine and your work
            inspire others to see the world in a new light."
          </h2>
        </section>
        <section className="homeFeature__card"></section>
      </main>
    </>
  );
}

export default HomePageFeature;
