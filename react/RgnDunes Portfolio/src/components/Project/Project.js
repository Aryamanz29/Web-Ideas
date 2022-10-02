import React from "react";

import "./Project.css";

const Project = ({
  projectIndex,
  projectName,
  projectImage,
  projectGitUrl,
  projectHostedUrl,
  projectDescription,
  projectSkills,
  projectStartDate,
  projectEndDate,
  projectType,
}) => {
  return (
    <div className="project">
      <div class="project__icon">
        <img src={projectImage} alt="" />
      </div>
      <div className="project__contentBox">
        <br />
        <h3>{projectName}</h3>
        <h6>
          {projectStartDate} - {projectEndDate}
        </h6>
        <h5>
          {"↪"} {projectType} Project {"↩"}
        </h5>
        <br />
        <p>{projectDescription}</p>
        <br />
        <div className="project__skills">
          {projectSkills.length > 0
            ? projectSkills.map((skill) => (
                <div className="project__skill">{skill}</div>
              ))
            : ""}
        </div>
        <div className="project__buttons">
          {projectHostedUrl && (
            <a href={projectHostedUrl} target="_blank">
              <button className="project__button">Live Demo</button>
            </a>
          )}
          {projectGitUrl && (
            <a href={projectGitUrl} target="_blank">
              <button className="project__button">Source Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
