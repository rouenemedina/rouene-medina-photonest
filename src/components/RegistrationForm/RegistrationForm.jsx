import React from "react";
import "./RegistrationForm.scss";

function RegistrationForm() {
  return (
    <>
      <form>
        <article>
          <div>
            <label htmlFor="">First Name:</label>
            <input
              type="text"
              id=""
              className=""
              placeholder="First Name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="">Last Name:</label>
            <input
              type="text"
              id=""
              className=""
              placeholder="Last Name"
              required
            ></input>
          </div>
        </article>
        <article>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            id=""
            className=""
            placeholder="Email"
            required
          ></input>
        </article>
        <label htmlFor="">Password:</label>
        <article>
          <input
            type="text"
            id=""
            className=""
            placeholder="Password"
            required
          ></input>
        </article>
      </form>
    </>
  );
}

export default RegistrationForm;
