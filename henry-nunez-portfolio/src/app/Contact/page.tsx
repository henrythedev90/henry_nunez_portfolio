"use client";
import React, { useState } from "react";
import "./styles.css";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact_container">
      <div className="contact_body">
        <h2>Let's get in touch!</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Name:</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
              required
            />
          </label>
          <label htmlFor="email">
            <span>Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
              required
            />
          </label>
          <label htmlFor="message">
            <span>Message:</span>
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              value={values.message}
              required
            />
          </label>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
