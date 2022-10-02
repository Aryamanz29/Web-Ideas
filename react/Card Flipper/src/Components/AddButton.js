import plus from "../assets/plus.svg";

const AddButton = ({ color, toggleHide }) => {
  return (
    <div
      className="add-button"
      style={{ backgroundColor: color }}
      onClick={toggleHide}
    >
      <img src={plus} alt="plus" width="30px" height="30px" />
    </div>
  );
};

export default AddButton;