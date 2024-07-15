import "./Buttons.scss";
import React from "react";

function Buttons({
  showPrimary,
  showSecondary,
  showSubmit,
  showSignUp,
  showLogIn,
  showLogOut,
  showContact,
  showPortfolio,
  showCreate
}) {
  return (
    <div>
      {showPrimary && (
        <button type="submit" className="button__primary" >
          LEARN MORE
        </button>
      )}
      {showContact && (
        <button type="submit" className="button__primary" >
          Let's Talk!
        </button>
      )}

      {showSecondary && (
        <button type="submit" className="button__secondary">
          Cancel
        </button>
      )}
      {showLogOut && (
        <button type="submit" className="button__secondary">
          Log Out
        </button>
      )}

      {showSubmit && (
        <button type="submit" className="button__submit">
          Submit
        </button>
      )}
      {showPortfolio && (
        <button type="submit" className="button__submit">
          My Portfolio
        </button>
      )}

      {showCreate && (
        <button type="submit" className="button__create">
          Create My Portfolio
        </button>
      )}

      {showSignUp && (
        <button type="submit" className="button__signup">
          Sign Up
        </button>
      )}

      {showLogIn && (
        <button type="submit" className="button__login">
          Log In
        </button>
      )}
    </div>
  );
}

export default Buttons;
