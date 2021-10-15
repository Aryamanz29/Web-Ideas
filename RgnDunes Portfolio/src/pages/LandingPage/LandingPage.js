import React from "react";

import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Certificates from "./Certificates/Certificates";
import Reach from "./Reach/Reach";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Reach />
    </div>
  );
};

export default LandingPage;
