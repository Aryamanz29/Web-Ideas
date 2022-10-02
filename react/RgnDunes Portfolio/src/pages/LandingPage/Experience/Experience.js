import React, { useState, useEffect } from "react";

import "./Experience.css";
import Card from "../../../components/Card/Card";
import { db } from "../../../firebase";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    db.collection("experience")
      .orderBy("index", "desc")
      .onSnapshot((snapshot) =>
        setExperiences(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="experience">
      <h2>👨‍💻 Experiences 👨‍💻</h2>
      <div className="experience__wrapper">
        {experiences?.map(
          ({
            companyname,
            startdate,
            enddate,
            certificateurl,
            designation,
            websiteurl,
            skillname,
            description,
            index,
          }) => {
            return (
              <Card
                index={experiences?.length - index + 1}
                companyName={companyname}
                startDate={startdate}
                endDate={enddate}
                certificateUrl={certificateurl}
                designation={designation}
                websiteUrl={websiteurl}
                skills={skillname}
                description={description}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experience;
