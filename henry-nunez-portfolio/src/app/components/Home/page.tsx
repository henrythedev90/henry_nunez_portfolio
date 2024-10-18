"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import SplitText from "./SplitText";
import { ContactForm } from "../ContactForm/ContactForm";
import useContactForm from "../../hooks/useContactForm";
import "./styles.css";

const Home = () => {
  const { values, isSubmitted, handleChange, handleSubmit } = useContactForm();
  const [fadeIn, setFadeIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const NA = "🌎";
  const AF = "🌍";
  const AS = "🌏";

  const globalEmoji = [NA, AF, AS];
  const [currentEmoji, setCurrentEmoji] = useState(globalEmoji[0]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await handleSubmit(e);
      setShowSuccessMessage(true);
      setTimeout(() => {
        closeModal();
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  let i = 0;
  useEffect(() => {
    setFadeIn(true);
    const interval = setInterval(() => {
      setCurrentEmoji(globalEmoji[i++ % globalEmoji.length]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home_page">
      <div className="first_row first_column">
        <div className="card-container image_container">
          <div className="card white image_card">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={200} // Increased width for better clarity
              height={200} // Increased height for better clarity
              sizes="(max-width: 600px) 100vw 200px"
              priority
              className="profile_image"
            />
          </div>
          <div className="card black"></div>
          <div className="card white"></div>
          <div className="card black"></div>
        </div>

        <div className={`first_row_desktop ${fadeIn ? "fade-in" : ""}`}>
          <h1 className="home_title_desktop">
            <SplitText text="Henry Nuñez" />
            <span> &#x1F468;&#x1F3FE;&#x200D;&#x1F4BB;</span>
          </h1>
          <h2 className="home_subtitle_desktop">
            <SplitText text="Software Engineer" />
            <span> &#128187;</span>
          </h2>
          <div className="contact-container">
            <button className="open-modal-button" onClick={openModal}>
              Contact Me!
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} closeName="X">
              {isSubmitted ? (
                <div
                  className={`success-message ${
                    isSubmitted ? "fade-in-top" : ""
                  }`}
                >
                  <p>Message sent successfully!</p>
                </div>
              ) : (
                <>
                  <h2>Let&apos;s get in touch!</h2>
                  <ContactForm
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleFormSubmit}
                  />
                </>
              )}
            </Modal>
          </div>
        </div>
      </div>
      <div className={`second_row first_column ${fadeIn ? "fade-in" : ""}`}>
        <div className="card-container-mobile card-container-desktop">
          <h1>Hello World! {currentEmoji}</h1>

          <p>
            My name is Henry Nuñez and I have a little over 4 years of dedicated
            experience as a software engineer, I’ve contributed to innovative
            fintech solutions and supported non-profit organizations with
            impactful front-end work. Known for my problem-solving abilities,
            I’ve consistently delivered effective resolutions to critical web
            application issues, combining technical expertise with a passion for
            making a difference. I’m excited about the possibility of
            collaborating with like-minded individuals to create innovative
            solutions. With my experience, I’m confident that together we can
            tackle challenges and make a meaningful impact. Let’s connect and
            explore how our skills and goals align!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
