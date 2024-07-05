import "./SignUpPage.scss";
import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function SignUpPage() {
  return (
    <main>
      <section className="registration">
        <h1 className="registration__title">CREATE NEW ACCOUNT</h1>
        <div className="registration__card">
          <h3 className="registration__subtitle">Already a member? </h3>
          <Link to="" className="registration__link">
            <h3 className="registration__login">Log In</h3>
          </Link>
        </div>
      </section>
      <section className="registration__form">
        <RegistrationForm />
      </section>
    </main>
  );
}

export default SignUpPage;
