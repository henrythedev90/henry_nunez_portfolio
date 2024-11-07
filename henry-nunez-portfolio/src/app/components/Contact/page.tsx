"use client";
import React from "react";
import "./styles.css";
import { ContactForm } from "../ContactForm/ContactForm";
import useContactForm from "../../hooks/useContactForm";

export default function Contact() {
  const { values, isSubmitted, handleChange, handleSubmit } = useContactForm();
  return (
    <div className="contact_container">
      <div className="contact_body">
        {isSubmitted ? (
          <div
            className={`success-message ${isSubmitted ? "fade-in-top" : ""}`}
          >
            <p>Message sent successfully!</p>
          </div>
        ) : (
          <>
            <h2>Lets get in touch</h2>
            <ContactForm
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
}
