"use client";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home/page";
import Skills from "./components/Skills/page";
import Contact from "./components/Contact/page";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

import "./globals.css";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 601);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="app">
      <Fragment>
        <Header />
        <Home />
        <Skills />
        {isMobile ? <Contact /> : <div>hello</div>}
        <Footer />
      </Fragment>
    </div>
  );
};

export default Page;
