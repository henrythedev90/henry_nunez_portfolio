import React from "react";
import { Fragment } from "react";
import Home from "./Home/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";

const Page = () => {
  return (
    <Fragment>
      <Home />
      <Skills />
      <Contact />
    </Fragment>
  );
};

export default Page;
