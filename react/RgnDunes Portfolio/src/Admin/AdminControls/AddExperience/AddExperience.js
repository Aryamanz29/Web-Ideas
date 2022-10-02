import React, { useState, useEffect } from "react";

import "./AddExperience.css";
import { db } from "../../../firebase";

const AddExperience = () => {
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");
  const [designation, setDesignation] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    db.collection("experience")
      .orderBy("index", "desc")
      .onSnapshot((snapshot) =>
        setExperiences(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const handleSubmit = () => {
    var _skills = skills.split(", ");
    var index = experiences?.length + 1;
    db.collection("experience").add({
      index: index,
      companyname: companyName,
      startdate: startDate,
      enddate: endDate,
      certificateurl: certificateUrl,
      websiteurl: websiteUrl,
      designation: designation,
      description: description,
      skillname: _skills,
    });
    setCompanyName("");
    setStartDate("");
    setEndDate("");
    setCertificateUrl("");
    setDesignation("");
    setDescription("");
    setWebsiteUrl("");
    setSkills("");
  };

  return (
    <div className="addexperience">
      <h2>➕ Add Experience ➕</h2>
      <div className="form">
        <input
          type="text"
          name="companyname"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter the Company name"
          required
        />
        <input
          type="text"
          name="startdate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Enter the start date (Format : 08 Oct, 2020)"
          required
        />
        <input
          type="text"
          name="enddate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="Enter the  end date (Format : 08 Oct, 2020 / Present)"
          required
        />
        <input
          type="url"
          name="certificateurl"
          value={certificateUrl}
          onChange={(e) => setCertificateUrl(e.target.value)}
          placeholder="Enter the url of certificate"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input
          type="url"
          name="websiteurl"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          placeholder="Enter the website url of company "
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input
          type="text"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="Enter your designation "
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="7"
          placeholder="Enter the description"
          required
        />
        <input
          type="text"
          name="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter the skill name (eg: C, C++)"
          required
        />
        <input type="submit" value="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddExperience;
