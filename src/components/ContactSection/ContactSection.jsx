import Buttons from "../Buttons/Buttons";
import "./ContactSection.scss";
import React from "react";

function ContactSection() {
  return (
    <main className="section__contact">
      <section className="section__container">
        <p className="section__description">"Let's create timeless memories together. I'd love to hear about your vision for your special day and capture it through my lens.Contact me today to begin our journey towards unforgettable moments."</p>
        <Buttons showContact />
      </section>
    </main>
  );
}

export default ContactSection;
//TODO: link button to contact page