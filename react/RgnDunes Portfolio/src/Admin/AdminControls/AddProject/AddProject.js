import React, { useState } from "react";

import "./AddProject.css";
import { db } from "../../../firebase";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectGitUrl, setProjectGitUrl] = useState("");
  const [projectHostedUrl, setProjectHostedUrl] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSkills, setProjectSkills] = useState([]);
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  const [projectType, setProjectType] = useState("");

  const handleSubmit = () => {
    var _skills = projectSkills.split(", ");
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("projects")
      .add({
        description: projectDescription,
        enddate: projectEndDate,
        giturl: projectGitUrl,
        hostedurl: projectHostedUrl,
        logourl: projectImage,
        name: projectName,
        skillname: _skills,
        startdate: projectStartDate,
        type: projectType,
        drivelink: true,
      });
    setProjectName("");
    setProjectImage("");
    setProjectGitUrl("");
    setProjectHostedUrl("");
    setProjectDescription("");
    setProjectSkills([]);
    setProjectStartDate("");
    setProjectEndDate("");
    setProjectType("");
  };

  return (
    <div className="addproject">
      <h2>➕ Add Project ➕</h2>
      <div className="form">
        <input
          type="text"
          name="projectname"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter the project name"
          required
        />
        <input
          type="url"
          name="projectimage"
          value={projectImage}
          onChange={(e) => setProjectImage(e.target.value)}
          placeholder="Enter the url of project logo"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input
          type="url"
          name="projectgiturl"
          value={projectGitUrl}
          onChange={(e) => setProjectGitUrl(e.target.value)}
          placeholder="Enter the github link of project"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input
          type="url"
          name="projecthostedlink"
          value={projectHostedUrl}
          onChange={(e) => setProjectHostedUrl(e.target.value)}
          placeholder="Enter the hosted url of project"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <textarea
          name="projectdescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          rows="7"
          placeholder="Enter the project description"
          required
        />
        <input
          type="text"
          name="projectskills"
          value={projectSkills}
          onChange={(e) => setProjectSkills(e.target.value)}
          placeholder="Enter the skill name (eg: C, C++)"
          required
        />
        <input
          type="text"
          name="projectstartdate"
          value={projectStartDate}
          onChange={(e) => setProjectStartDate(e.target.value)}
          placeholder="Enter the project start date (Format : 08 Oct, 2020)"
          required
        />
        <input
          type="text"
          name="projectenddate"
          value={projectEndDate}
          onChange={(e) => setProjectEndDate(e.target.value)}
          placeholder="Enter the project end date (Format : 08 Oct, 2020 / Present)"
          required
        />
        <input
          type="text"
          name="projecttype"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          placeholder="Enter the project type (Solo/Team)"
          required
        />
        <input type="submit" value="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddProject;
