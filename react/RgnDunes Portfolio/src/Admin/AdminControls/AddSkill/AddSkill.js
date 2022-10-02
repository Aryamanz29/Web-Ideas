import React, { useState } from "react";

import "./AddSkill.css";
import { db } from "../../../firebase";

const AddSkill = () => {
  const [skillUrl, setSkillUrl] = useState("");
  const [skillName, setSkillName] = useState("");

  const handleSubmit = () => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("skills")
      .add({
        url: skillUrl,
        skillname: skillName,
      });
    setSkillUrl("");
    setSkillName("");
  };

  return (
    <div className="addskill">
      <h2>➕ Add Skill ➕</h2>
      <div className="form">
        <input
          type="url"
          name="skillurl"
          value={skillUrl}
          onChange={(e) => setSkillUrl(e.target.value)}
          placeholder="Enter the url of skill icon"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input
          type="text"
          name="skillname"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Enter the skill name"
          required
        />
        <input type="submit" value="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddSkill;
