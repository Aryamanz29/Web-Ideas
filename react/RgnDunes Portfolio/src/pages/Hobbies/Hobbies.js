import React, { useState } from "react";

import "./Hobbies.css";
import MobPhotography from "./MobPhotography/MobPhotography";
import CoinCollection from "./CoinCollection/CoinCollection";

const Hobbies = () => {
  const [mobPhotographySelected, setMobPhotographySelected] = useState(true);

  return (
    <div className="hobbies">
      <div className="hobbies_toggleSwitch">
        <h4>Mobile Photography</h4>
        <input
          class="tgl tgl-ios"
          id="cb2"
          type="checkbox"
          onChange={(e) => setMobPhotographySelected(!mobPhotographySelected)}
        />
        <label class="tgl-btn" for="cb2"></label>
        <h4>Coin Collection</h4>
      </div>
      <div className="hobbies__content">
        {mobPhotographySelected ? <MobPhotography /> : <CoinCollection />}
      </div>
    </div>
  );
};

export default Hobbies;
