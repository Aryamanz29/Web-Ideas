import React from "react";

import "./Reach.css";
import Whatsapp from "../../../assets/images/reach/whatsapp.png";
import Gmail from "../../../assets/images/reach/gmail.png";
import Github from "../../../assets/images/reach/github.png";
import Linkedin from "../../../assets/images/reach/linkedin.png";

const Reach = () => {
  return (
    <div className="reach">
      <h2>☎️ Contact Me ☎️ </h2>
      <div className="reach__content">
        <a href="https://www.linkedin.com/in/rgndunes/" target="_blank">
          <button className="reach__contentItem">
            <img src={Linkedin} alt="" />
          </button>
        </a>

        <a href="https://github.com/RgnDunes" target="_blank">
          <button className="reach__contentItem">
            <img src={Github} alt="" />
          </button>
        </a>

        <a href="mailto:singh.divyansh1802@gmail.com" target="_blank">
          <button className="reach__contentItem">
            <img src={Gmail} alt="" />
          </button>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=917394926646"
          target="_blank"
        >
          <button className="reach__contentItem">
            <img src={Whatsapp} alt="" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Reach;
