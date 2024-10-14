"use client";
import React from "react";
import "./styles.css";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="contact_container">
      <div className="contact_body">
        <h2>Let's get in touch!</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Name:</span>
            <input type="text" placeholder="Name" required />
          </label>
          <label htmlFor="email">
            <span>Email:</span>
            <input type="email" placeholder="Email" required />
          </label>
          <label htmlFor="message">
            <span>Message:</span>
            <textarea placeholder="Message" required />
          </label>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
