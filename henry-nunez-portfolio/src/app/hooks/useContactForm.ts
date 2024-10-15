"use client";
import { useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const removeSuccess = () => {
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const twilioMailUrl = "/api/mail";
    e.preventDefault();
    try {
      const response = await fetch(twilioMailUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setIsSubmitted(true);
      removeSuccess();
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    values,
    isSubmitted,
    handleChange,
    handleSubmit,
  };
};
export default useContactForm;
