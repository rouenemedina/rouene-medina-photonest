import "./PortfolioHero.scss";
import React, { useEffect, useState } from "react";
import getHeroDetailsData from "../../utils/getHeroDetailsData";
import img1 from "../../assets/images/vadim-paripa-tEFItLGn0uc-unsplash.jpg";

function PortfolioHero() {
  const [heroDetails, setHeroDetails] = useState(null);
  const [loadingHeroDetails, setLoadingHeroDetails] = useState(true);
  const [error, setError] = useState(false);
  const [imageOrientation, setImageOrientation] = useState("");

  //TODO : fix once login is integrated
  //const userId= sessionStorage.getItem("photonest_user_id");
  const userId = 4;

  useEffect(() => {
    async function getHeroDetails() {
        try{
            setHeroDetails(await getHeroDetailsData(userId));
            setLoadingHeroDetails(false);
        } catch(err){
            console.log("Error fetching data", err)
            setError(true);
        }
    }
    getHeroDetails();
  }, []);

  useEffect(() => {
    if (heroDetails && heroDetails.hero_url) {
      const img = new Image();
      img.src = heroDetails.hero_url;
      img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        if (aspectRatio > 1) {
          setImageOrientation("landscape");
        } else {
          setImageOrientation("portrait");
        }
      };
    }
  }, [heroDetails]);

  if (loadingHeroDetails) {
    return <p> Loading Portfolio Hero Details data... </p>;
  }

  if (error) {
    return <p> Something went wrong. Please try refreshing the page</p>;
  }

  console.log(heroDetails);

  return (
    <main>
      <section className="portfolio__hero">
        <img
          src={heroDetails.hero_url}
          alt="featured photo"
          className={`portfolio__feature portfolio__feature--${imageOrientation}`}
        ></img>
        <p className="portfolio__pitch">{heroDetails.hero_description}</p>
      </section>
    </main>
  );
}

export default PortfolioHero;