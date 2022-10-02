import React from "react";

import "./SubBanner.css";
import MyPhoto from "../../../../assets/images/photos/myPhotoBlackBgAscii.jpeg";

const SubBanner = () => {
  return (
    <div className="subbanner">
      <div className="wrapper">
        <div className="subbanner__photo">
          <img src={MyPhoto} alt="" />
        </div>
        <div className="subbanner__caption">
          <div className="subbanner__captionSmall">Hi, I'm a</div>
          <div className="subbanner__captionLarge typo__style">
            <span className="subbanner__captionLargeSpan">{"<"}</span>
            Web Developer
            <span className="subbanner__captionLargeSpan">{" />"}</span>
          </div>

          <div className="subbanner__captionHighlight"></div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
