import "./PortfolioPage.scss";
import React from "react";
import Header from "../../components/Header/Header";
// import img1 from "../../assets/images/vadim-paripa-tEFItLGn0uc-unsplash.jpg";
import img2 from "../../assets/images/alexandra-gornago-o2zFDffQnDM-unsplash.jpg";
import img3 from "../../assets/images/ian-dooley-PuA6F4FAElw-unsplash.jpg";
import img4 from "../../assets/images/melanie-villeneuve-70RHiKO9kj8-unsplash.jpg";
import PhotographersSection from "../../components/PhotographersSection/PhotographersSection";
import PortfolioGallery from "../../components/PortfolioGallery/PortfolioGallery";
import PortfolioContactSection from "../../components/PortfolioContactSection/PortfolioContactSection";
import PortfolioHero from "../../components/PortfolioHero/PortfolioHero";

function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="portfolio">
        <PortfolioHero />
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
        <PortfolioContactSection />
        <PortfolioGallery />
      </main>
    </>
  );
}

export default PortfolioPage;
//TODO: refactor to dynamic state
