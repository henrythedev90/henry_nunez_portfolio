"use client";
// import React, { useState } from "react";
// import { Modal } from "../components/Modal";
// // import "./styles.css";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Let's get in touch!</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" placeholder="Name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" placeholder="Email" required />
        </label>
        <label htmlFor="message">
          Message:
          <textarea placeholder="Message" required />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
