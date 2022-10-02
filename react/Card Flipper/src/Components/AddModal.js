import { useState } from "react";
import { addFlashCard } from "./utils/service";

const AddModal = ({ toggleHide, refresh, setRefresh }) => {
  const [que, setQue] = useState("");
  const [ans, setAns] = useState("");

  // console.log(que);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addFlashCard({ question: que, answer: ans });
      console.log(res);
      if (res.error === false) {
        setAns("");
        setQue("");
        toggleHide();
        setRefresh(!refresh);
      }
      // console.log(res)
    } catch (err) {
      console.log(err);
    }

    // console.log(que, ans);
  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="heading">Add Question</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="que"
            placeholder="Question"
            value={que}
            onChange={(e) => setQue(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="ans"
            placeholder="Answer"
            value={ans}
            onChange={(e) => setAns(e.target.value)}
          />
          <br />
          <div className="btn-container">
            <button className="btn btn-submit" type="submit">
              Submit
            </button>
            <button className="btn btn-cancel" onClick={toggleHide}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;