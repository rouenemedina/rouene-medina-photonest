import "./Buttons.scss";
import React from "react";

function Buttons({
  showPrimary,
  showSecondary,
  showSubmit,
  showSignUp,
  showLogIn,
}) {
  return (
    <div>
      {showPrimary && (
        <button type="submit" className="button__primary" >
          LEARN MORE
        </button>
      )}
      {showSecondary && (
        <button type="submit" className="button__secondary">
          Cancel
        </button>
      )}
      {showSubmit && (
        <button type="submit" className="button__submit">
          Submit
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
