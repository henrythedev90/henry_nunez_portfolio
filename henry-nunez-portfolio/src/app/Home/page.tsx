import React from "react";
import "./styles.css";
import Image from "next/image";

const Home = () => {
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
      </div>
      <div>world</div>
    </div>
  );
};

export default Home;
