import React, { useEffect, useState } from "react";

import "./Certificates.css";
import { db } from "../../../firebase";
import { extractIdFromDriveLink } from "../../../utils";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("certificates")
      .onSnapshot((snapshot) =>
        setCertificates(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="certificates">
      <h2>📄 Certificates 📄</h2>
      <div className="certificates__content">
        {certificates?.map(({ url }) => {
          const _url =
            "https://drive.google.com/uc?export=view&id=" +
            extractIdFromDriveLink(url);
          return (
            <div class="image">
              <img key={url} src={_url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
