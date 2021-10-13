import React from "react";
import "./Loader.css";
import LoaderSVG from "./Loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderSVG} />
    </div>
  );
};

export default Loader;
