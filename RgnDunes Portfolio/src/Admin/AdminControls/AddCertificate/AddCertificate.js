import React, { useState } from "react";

import "./AddCertificate.css";
import { db } from "../../../firebase";

const AddCertificate = () => {
  const [certificateUrl, setCertificateUrl] = useState("");

  const handleSubmit = () => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("certificates")
      .add({
        url: certificateUrl,
      });
    setCertificateUrl("");
  };

  return (
    <div className="addcertificate">
      <h2>➕ Add Certificate ➕</h2>
      <div className="form">
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
        <input type="submit" value="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddCertificate;
