import React from "react";
import "./styles.css";

interface ContactFormProps {
  values: {
    name: string;
    email: string;
    message: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  values,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-container">
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
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
