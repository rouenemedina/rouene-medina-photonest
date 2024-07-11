import "./PortfolioPage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import img1 from "../../assets/images/vadim-paripa-tEFItLGn0uc-unsplash.jpg";
import img2 from "../../assets/images/alexandra-gornago-o2zFDffQnDM-unsplash.jpg";
import img3 from "../../assets/images/ian-dooley-PuA6F4FAElw-unsplash.jpg";
import img4 from "../../assets/images/melanie-villeneuve-70RHiKO9kj8-unsplash.jpg";
import PhotographersSection from "../../components/PhotographersSection/PhotographersSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Gallery from "../../components/Gallery/Gallery";

function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="portfolio">
        <section className="portfolio__hero">
          <img
            src={img1}
            alt="featured photo"
            className="portfolio__feature"
          ></img>
          <p className="portfolio__pitch">
            Welcome to my portfolio! I'm Nick, a wedding photographer dedicated
            to capturing unforgettable moments. This featured photo captures a
            heartfelt moment: the groom tenderly kissing the bride's forehead
            amidst lush greenery. It's a scene filled with intimacy and love,
            reflecting the essence of their special day. Join me as I unveil
            more stories like these, each frame a testament to the beauty of
            weddings.
          </p>
        </section>

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

        <PhotographersSection />
        <ContactSection />
        <Gallery />
      </main>
    </>
  );
}

export default PortfolioPage;
//TODO: refactor to dynamic state
