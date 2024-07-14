import "./PortfolioPage.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import getFilesChecker from "../../utils/getFilesChecker";
import Header from "../../components/Header/Header";
import PortfolioGallery from "../../components/PortfolioGallery/PortfolioGallery";
import PortfolioContactSection from "../../components/PortfolioContactSection/PortfolioContactSection";
import PortfolioHero from "../../components/PortfolioHero/PortfolioHero";
import PortfolioWork from "../../components/PortfolioWork/PortfolioWork";
import PhotographerAbout from "../../components/PhotographerAbout/PhotographerAbout";
import welcomeImg from "../../assets/images/z-welcome.png";
import Buttons from "../../components/Buttons/Buttons";

function PortfolioPage() {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("photonest_user_id");
  const [hasFiles, setHasFiles] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    //check if user has files in the database
    const checkUserFiles = async () => {
      try {
        const hasFiles = await getFilesChecker(userId);
        setHasFiles(hasFiles);
        setLoading(false);
      } catch (err) {
        console.log("Error checking if this user has files:", err);
        setLoading(false);
      }
    };
    checkUserFiles();
  }, [userId, navigate]);

  if (loading) {
    return <p> Loading data... </p>;
  }

  return (
    <>
      <Header />
      <main className="portfolio">
        {hasFiles ? (
          <>
            <PortfolioHero userId={userId} />
            <PortfolioWork userId={userId} />
            <PhotographerAbout userId={userId} />
            <PortfolioContactSection userId={userId} />
            <PortfolioGallery userId={userId} />
          </>
        ) : (
          <>
            <section className="silhouette">
              <article className="silhouette__card">
                <h1 className="silhouette__title">Welcome!</h1>
                <h2 className="silhouette__description">
                  Please upload your first photos to get started.
                </h2>
                <div className="silhouette__subcard">
                  <img src={welcomeImg} alt="Welcome Image"></img>
                  <Link to="/editportfolio">
                    <Buttons showCreate />
                  </Link>
                </div>
              </article>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default PortfolioPage;
