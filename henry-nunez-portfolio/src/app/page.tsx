"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
import Home from "./Home/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";

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
    <Fragment>
      <Home />
      <Skills />
      {isMobile && <Contact />}
    </Fragment>
  );
};

export default Page;
