import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Projects.css";
import { extractIdFromDriveLink } from "../../../utils";
import { db } from "../../../firebase";
import Project from "../../../components/Project/Project";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("projects")
      .limit(4)
      .onSnapshot((snapshot) =>
        setAllProjects(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="projects">
      <h2>📂 Projects 📂</h2>
      <div className="experience__wrapper">
        {allProjects?.map(
          ({
            description,
            name,
            logourl,
            giturl,
            hostedurl,
            skillname,
            startdate,
            enddate,
            type,
            drivelink,
          }) => {
            const url = drivelink
              ? "https://drive.google.com/uc?export=view&id=" +
                extractIdFromDriveLink(logourl)
              : logourl;
            return (
              <Project
                projectName={name}
                projectImage={url}
                projectGitUrl={giturl}
                projectHostedUrl={hostedurl}
                projectDescription={description}
                projectSkills={skillname}
                projectStartDate={startdate}
                projectEndDate={enddate}
                projectType={type}
              />
            );
          }
        )}
      </div>
      <Link to="/projects">
        <button className="projects__button">More Projects...</button>
      </Link>
    </div>
  );
};

export default Projects;
