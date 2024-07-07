import "./ContactPage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";

function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
      </main>
    </>
  );
}

export default ContactPage;
