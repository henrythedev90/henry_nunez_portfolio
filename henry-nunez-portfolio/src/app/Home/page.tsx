"use client";
import React from "react";
import "./styles.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import SplitText from "../components/SplitText";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
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
              layout="responsive" // Makes the image responsive
              sizes="(max-width: 600px) 100vw"
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
            <SplitText text="Henry Nuñez &#x1F468;&#x1F3FE;&#x200D;&#x1F4BB;" />
          </h1>
          <h2 className="home_subtitle_desktop">
            <SplitText text="Software Engineer &#128187;" />
          </h2>
        </div>
      </div>
      <div className={`second_row first_column ${fadeIn ? "fade-in" : ""}`}>
        <div className="card-container-mobile card-container-desktop">
          <h1>Hello World! &#x1F468;&#x1F3FE;&#x200D;&#x1F4BB;</h1>
          <p>
            I'm Henry Nunez and I have a little over 4 years of dedicated
            experience as a software engineer, I’ve contributed to innovative
            fintech solutions and supported non-profit organizations with
            impactful front-end work. Known for my problem-solving abilities,
            I’ve consistently delivered effective resolutions to critical web
            application issues, combining technical expertise with a passion for
            making a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
