import React, { useState, useEffect } from "react";

import "./Skills.css";
import { db } from "../../../firebase";
import { extractIdFromDriveLink } from "../../../utils";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("skills")
      .onSnapshot((snapshot) =>
        setSkills(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="skills">
      <h2>🖊 Languages, Tools & Frameworks 🖊 </h2>
      <div className="skills__badgesContainer">
        <div className="skills__badges">
          {skills?.map(({ skillname, url }) => {
            const _url =
              "https://drive.google.com/uc?export=view&id=" +
              extractIdFromDriveLink(url);
            return <img key={skillname} src={_url} alt={skillname} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
