import React, { useState, useEffect } from "react";

import "./TeamProjects.css";
import { extractIdFromDriveLink } from "../../../utils";
import { db } from "../../../firebase";
import Project from "../../../components/Project/Project";

const TeamProjects = () => {
  const [teamProjects, setTeamProjects] = useState([]);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("projects")
      .onSnapshot((snapshot) =>
        setTeamProjects(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="teamProjects">
      <h2>Team Projects</h2>
      <div className="teamProjects__content">
        {teamProjects?.map(
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
            if (type == "Team") {
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
          }
        )}
      </div>
    </div>
  );
};

export default TeamProjects;
