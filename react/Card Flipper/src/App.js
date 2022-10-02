// import { useState } from "react";
import "./App.css";
//import AddButton from "./Components/AddButton";
// import AddModal from "./Components/AddModal";
// import Card from "./Components/Card";
import FlashCards from "./Components/Flashcard";
//import Counter from "./Components/Counter";

const App = () => {
  // const color = "#0f9d58";
  // const [hide, setHide] = useState(true);

  // const toggleHide = () => {
  //   setHide(!hide);
  // };

  // let promiseWala = () => {
  //   return new Promise((resolve, reject) => {
  //     if (false) {
  //       setTimeout(() => {
  //         resolve("vada poora");
  //       }, 5000);
  //     } else {
  //       setTimeout(() => {
  //         resolve("vada tut gya");
  //       }, 5000);
  //     }
  //   });
  // };

  // console.log(promiseWala());
  // promiseWala()
  //   .then((text) => console.log(text))
  //   .catch((text) => console.log(text));

  // let asyncFunction = async () => {
  //   try {
  //     let promiseResponse = await promiseWala();
  //     console.log(promiseResponse);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // try{
  //   a=76;
  // }catch(error){

  // }

  //asyncFunction();

  return <FlashCards />;
};

export default App;