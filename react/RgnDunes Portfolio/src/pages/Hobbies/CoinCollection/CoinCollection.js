import React, { useState, useEffect } from "react";

import "./CoinCollection.css";
import { db } from "../../../firebase";
import Loader from "../../../components/Loader/Loader";
import { extractIdFromDriveLink } from "../../../utils";

const CoinCollection = () => {
  const [coins, setCoins] = useState([]);
  const [coinsLoaded, setCoinsLoaded] = useState(false);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("hobbies")
      .doc("zrzvCxmk1tsVdeMfdMA8")
      .collection("coins")
      .onSnapshot((snapshot) =>
        setCoins(
          snapshot.docs.map((doc) => {
            setCoinsLoaded(true);
            return doc.data();
          })
        )
      );
  }, []);

  return (
    <div className="coinCollection">
      <h2>Coins Collection</h2>
      {coinsLoaded ? (
        <div className="coinCollection__content">
          {coins.map(({ url }) => {
            const _url =
              "https://drive.google.com/uc?export=view&id=" +
              extractIdFromDriveLink(url);
            return (
              <div className="image">
                <img src={_url} alt="" />
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

export default CoinCollection;
