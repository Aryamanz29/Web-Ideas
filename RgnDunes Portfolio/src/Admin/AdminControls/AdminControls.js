import React from "react";

import "./AdminControls.css";
import AddSkill from "./AddSkill/AddSkill";
import AddExperience from "./AddExperience/AddExperience";
import AddProject from "./AddProject/AddProject";
import AddCertificate from "./AddCertificate/AddCertificate";
import AddMobPhotography from "./AddMobPhotography/AddMobPhotography";
import AddCoinsCollection from "./AddCoinsCollection/AddCoinsCollection";

const AdminControls = () => {
  return (
    <div className="adminControls">
      <div className="adminControls__greeting">
        <h3>🔥 Welcome back rgndunes 🔥</h3>
        <h5>↪ Congrats for the new achievement ↩</h5>
      </div>
      <AddSkill />
      <AddExperience />
      <AddProject />
      <AddCertificate />
      <AddMobPhotography />
      <AddCoinsCollection />
    </div>
  );
};

export default AdminControls;
