import "./NotFoundPage.scss";
import React from "react";
import notFoundImg from "../../assets/images/z-Firefly75119.jpg";

function NotFoundPage() {
  return (
    <main className="lost">
      <img
        src={notFoundImg}
        alt="Page Not Found"
        className="lost__background"
      ></img>
      <section className="lost__container">
        <h1 className="lost__title">404 - Page Not Found</h1>
        <p className="lost__description">
          Sorry, the page you are looking for could not be found.
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;
