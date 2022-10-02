import { useState, useEffect } from "react"
import { getFlashCards } from "./utils/service";
import AddButton from "./AddButton";
import AddModal from "./AddModal";
import Card from "./Card";

const FlashCards = () => {
  const color = "#0f9d58";
  const [hide, setHide] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };
  
 
  useEffect(() => {
    const getCards = async () => {
      try {
        const res = await getFlashCards();
        console.log(res);
        if (res.error === false) {
          setCardData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getCards();
  }, [refresh]);



  return (
    <>
      <div className="main-container">
        <AddButton color={color} toggleHide={toggleHide} />
        <div className="cards">
          {cardData.map((card)=> 
          {
            return <Card data = {card} key ={card._id} />

             })}
         {/* {<Card /> } */}
        </div>
      </div>
      {hide ? null : <AddModal toggleHide={toggleHide} refresh={refresh} setRefresh={setRefresh}
       />}
    </>
  );
};

export default FlashCards;