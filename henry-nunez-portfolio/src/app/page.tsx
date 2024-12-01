"use client";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home/page";
import Skills from "./components/Skills/page";
import Contact from "./components/Contact/page";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/page";

import "./globals.css";

const Page = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 601 : false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 601);
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div id="app">
      <Fragment>
        <Header />
        <Home />
        <Skills />
        {isMobile ? <Contact /> : <Resume />}
        <Footer />
      </Fragment>
    </div>
  );
};

export default Page;
