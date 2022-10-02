import React, { useState } from "react";

import "./Projects.css";
import SoloProjects from "./SoloProjects/SoloProjects";
import TeamProjects from "./TeamProjects/TeamProjects";

const Projects = () => {
  const [soloProjectSelected, setSoloProjectSelected] = useState(true);

  return (
    <div className="projects">
      <div className="projects__toggleSwitch">
        <h4>Solo Projects</h4>
        <input
          class="tgl tgl-ios"
          id="cb2"
          type="checkbox"
          onChange={(e) => setSoloProjectSelected(!soloProjectSelected)}
        />
        <label class="tgl-btn" for="cb2"></label>
        <h4>Team Projects</h4>
      </div>
      <div className="projects__content">
        {soloProjectSelected ? <SoloProjects /> : <TeamProjects />}
      </div>
    </div>
  );
};

export default Projects;
