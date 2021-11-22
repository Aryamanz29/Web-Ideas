import { useState } from "react";
 import del from "../assets/delete.svg";
import { deleteFlashCard } from "./utils/service";

const Card = ({ data, refresh, setRefresh }) => {
  const [flip, setFlip] = useState(true);
  const handleDelete = async (e) => {
    e.stopPropagation();
    const res = await deleteFlashCard(data._id);
    if (res.error === false) {
      setRefresh(!refresh);
    }
  };

  return (
    <>
      <div className="card-container">
        <div
          className={`card card-que ${flip ? "anti-flip" : "flip"} `}
          onClick={() => setFlip(!flip)}
        >
          <div className="text-container">{data.question}</div>
          <img
            id="del"
            src={del}
            alt="delete"
            width="24px"
            height="24px"
            className={`del-icon`}
            onClick={handleDelete}
          />
        </div>
        <div
          className={`card card-ans ${flip ? "flip" : "anti-flip"}`}
          onClick={() => setFlip(!flip)}
        >
          <div className="text-container">{data.answer}</div>
          <img
            id="del"
            src={del}
            alt="delete"
            width="24px"
            height="24px"
            className={`del-icon`}
            onClick={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default Card;