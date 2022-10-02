import React, { useState } from "react";
import { db } from "../../../firebase";

import "./AddMobPhotography.css";

const AddMobPhotography = () => {
  const [mobPhotographUrl, setMobPhotographUrl] = useState("");

  const handleSubmit = () => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("hobbies")
      .doc("zrzvCxmk1tsVdeMfdMA8")
      .collection("mobPhotography")
      .add({ url: mobPhotographUrl });
    setMobPhotographUrl("");
  };
  return (
    <div className="addmobilephotography">
      <h2>➕ Add Mob Photograph ➕</h2>
      <div className="form">
        <input
          type="url"
          name="mobphotographurl"
          value={mobPhotographUrl}
          onChange={(e) => setMobPhotographUrl(e.target.value)}
          placeholder="Enter the url of Mob Photograph"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input type="submit" value="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddMobPhotography;
