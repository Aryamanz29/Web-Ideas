import React, { useState } from "react";

import "./AddCoinsCollection.css";
import { db } from "../../../firebase";

const AddCoinsCollection = () => {
  const [coinUrl, setCoinUrl] = useState("");

  const handleSubmit = () => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("hobbies")
      .doc("zrzvCxmk1tsVdeMfdMA8")
      .collection("coins")
      .add({ url: coinUrl });
    setCoinUrl("");
  };

  return (
    <div className="addcoinscollection">
      <h2>➕ Add Coin ➕</h2>
      <div className="form">
        <input
          type="url"
          name="coinurl"
          value={coinUrl}
          onChange={(e) => setCoinUrl(e.target.value)}
          placeholder="Enter the url of coin"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input type="submit" value="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddCoinsCollection;
