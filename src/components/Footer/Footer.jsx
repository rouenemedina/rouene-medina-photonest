import "./Footer.scss";
import React from "react";
import logo from "../../assets/logo/Logo-2.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

function Footer() {
  return (
    <>
      <main className="footer">
        <img src={logo} alt="PhotoNest Logo" class="footer__logo"></img>
        <section className="footer__container">
          <article class="footer__company">
            <div class="company__employee">
              <h5 class="company__poc">Rouene Medina</h5>
              <h5 class="company__title">The PhotoNest Management</h5>
            </div>
            <div class="company__address">
              <p>501 District Penthouse,</p>
              <p>Toronto, ON, CA, M4Y2P7</p>
            </div>
            <p class="company__contact">info@photonest.ca</p>
          </article>
          <article class="footer__socials">
            <div class="socials__icons">
              <a class="socials__link" href="https://instagram.com/">
                <img src={instagram} alt="Instagram" class="socials__img" />
              </a>
              <a class="socials__link" href="https://facebook.com/">
                <img src={facebook} alt="Facebook" class="socials__img" />
              </a>
              <a class="socials__link" href="https://twitter.com/">
                <img src={twitter} alt="Twitter" class="socials__img" />
              </a>
            </div>
          </article>
        </section>
        <section className="footer__copyright">
          <h5 className="footer__description">
            &copy; 2024. PhotoNest. All Rights Reserved.
          </h5>
        </section>
      </main>
    </>
  );
}

export default Footer;
