import React, { useState, useEffect } from "react";

import "./MobPhotography.css";
import { db } from "../../../firebase";
import Loader from "../../../components/Loader/Loader";
import { extractIdFromDriveLink } from "../../../utils";

const MobPhotography = () => {
  const [mobPhotos, setMobPhotos] = useState([]);
  const [photosLoaded, setPhotosLoaded] = useState(false);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("hobbies")
      .doc("zrzvCxmk1tsVdeMfdMA8")
      .collection("mobPhotography")
      .onSnapshot((snapshot) =>
        setMobPhotos(
          snapshot.docs.map((doc) => {
            setPhotosLoaded(true);
            return doc.data();
          })
        )
      );
  }, []);

  return (
    <div className="mobPhotography">
      <h2>Mob Photography</h2>
      {photosLoaded ? (
        <div className="mobPhotography__content">
          {mobPhotos?.map(({ url }) => {
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MobPhotography;
