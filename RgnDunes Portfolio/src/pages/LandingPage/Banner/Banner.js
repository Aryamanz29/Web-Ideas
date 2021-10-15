import React from "react";

import "./Banner.css";
import Navbar from "./Navbar/Navbar";
import SubBanner from "./SubBanner/SubBanner";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <SubBanner />
    </div>
  );
};

export default Banner;
