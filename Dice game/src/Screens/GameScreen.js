import React, {useState, useEffect} from 'react'
import './css/GameScreen.css'
import {useHistory} from "react-router-dom"

function GameScreen (){
    
    const history = useHistory();

    const [index1, setIndex1] = useState(Math.floor(Math.random() * 6));
    const [index2, setIndex2] = useState(Math.floor(Math.random() * 6));
    
    const playerOne = history.location.state.player1
    const playerTwo = history.location.state.player2
    const winningScore = history.location.state.winningScore

    const [turn, setTurn] = useState(1)
    const [flag1, setFlag1] = useState(0)
    const [flag2, setFlag2] = useState(0)
    const [totalScore1, setTotalScore1] = useState(0)
    const [totalScore2, setTotalScore2] = useState(0)
    const [roundScore1, setRoundScore1] = useState(0)
    const [roundScore2, setRoundScore2] = useState(0)

    const [message, setMessage]= useState("")
    
    function handleMouseDown(num){
       const audio = document.getElementById("dice-roll");
        setMessage("")

        if(totalScore1 >=winningScore || totalScore2 >= winningScore) {
            document.documentElement.scrollTop = 0;       
         totalScore1>totalScore2?setMessage(`${playerOne} has Won!`): setMessage(`${playerTwo} has Won!`);
         document.getElementById("dice1").classList.remove("rotate");
         document.getElementById("dice2").classList.remove("rotate");
            return false;
        }
       if(num===1){
        if(flag1===1){
            document.getElementById("dice1").classList.remove("rotate")
            document.getElementById("dice2").classList.add("rotate")
            document.documentElement.scrollTop = 0;
           setMessage(`It's ${playerTwo}'s turn`)
            return false
        }
        document.getElementById("dice1").classList.add("rotate")
        document.getElementById("dice2").classList.remove("rotate")
        var i = Math.floor(Math.random() * 6)
        setIndex1(i)
        if(i===0){
            audio.play()
            setRoundScore1(0);
            setFlag1(1)
            setFlag2(0)
            return;
        }
        audio.play()
        setRoundScore1(roundScore1+i+1)
        setTurn(turn+1)
       }

       else {    
        if(flag2===1){
            document.getElementById("dice2").classList.remove("rotate")
            document.getElementById("dice1").classList.add("rotate")

                document.documentElement.scrollTop = 0;
                setMessage(`It's ${playerOne}'s turn`)
                return false;
            }
            document.getElementById("dice2").classList.add("rotate")
            document.getElementById("dice1").classList.remove("rotate")
         
            i = Math.floor(Math.random() * 6)
            setIndex2(i)
            if(i===0){
                audio.play()
                setRoundScore2(0);
                setFlag1(0)
                setFlag2(1)
                return
            }
            audio.play()
            setRoundScore2(roundScore2+i+1)
            setTurn(turn+1)
       }
    }

    function handleHoldClick(num){
  if(num===1){
    document.getElementById("dice1").classList.remove("rotate")
    document.getElementById("dice2").classList.add("rotate")
    setTotalScore1(totalScore1+roundScore1)
    setRoundScore1(0)
    setFlag1(1)
    setFlag2(0)
    document.documentElement.scrollTop = 0;
  }
  else{
    document.getElementById("dice1").classList.add("rotate")
    document.getElementById("dice2").classList.remove("rotate")
    setTotalScore2(totalScore2+roundScore2)
    setRoundScore2(0)
    setFlag2(1)
    setFlag1(0)
    document.documentElement.scrollTop = 0;
  }
    }
    useEffect(()=>{
        
        if(totalScore1>=winningScore){
            document.documentElement.scrollTop = 0;
          setMessage(`${playerOne} has Won!`)
        }
    }, [totalScore1,  winningScore, playerOne])

    useEffect(()=>{
        if(totalScore2>=winningScore){
            document.documentElement.scrollTop = 0;
           setMessage(`${playerTwo} has Won!`)
        }
    }, [totalScore2, winningScore, playerTwo])


    var ar = [
        "./one.png", 
        "./two.png", 
        "./three.png", 
        "./four.png", 
        "./five.png", 
        "./six.png"
    ]

    return (
        <div className="container-fluid game-screen">
            <div className="row game-screen-header">
                <div className="col-md-1"> 
    
                 <button onClick={()=> history.push({
                     pathname: '/rulesscreen',
                     state: {
                         player1: playerOne,
                         player2: playerTwo
                     }
                 })}className="back-to-rules-button">
                         back</button>
                         </div>
                <div className="col-md-10"><p id="displayMessage">{message}</p></div>
                <div className="col-md-1"></div>
            </div>
            <div className="row game-play-section">
                <div className="col-md-1"> </div>
                <div className="col-md-4 dice"> 
                <div className="row nested-row-left-player-name">
                     <div className="col-md-2"></div>
            <div className="col-md-5 player-name-for-dice"> <p className="player-1"><span className="player-names">{playerOne}'s</span>&nbsp;dice</p> </div>
            <div className="col-md-5"></div>
            </div>
                <div className="row nested-row-left-dice">
          
       <button onMouseDown={()=>handleMouseDown(1)}> 
   
             <img id="dice1" src={ar[index1]} alt="dice-one-img" />
        
       </button>
       </div>
       <div className="row nested-row-left-scores">
       <div className="col-md-2"></div>
            <div className="col-md-7 score-details">  
            Score:<br />
            Round Score: {roundScore1} <button className="hold-button" onMouseDown={()=>handleHoldClick(1)}>Hold</button> <br />
            Total Score: {totalScore1} <br />
            </div>
            <div className="col-md-3"></div>
       </div>
        </div>
        <div className="col-md-2 winning-score"> Winning Score : {winningScore}

        <button className="reset-button" onClick={()=>{
                                            setTurn(1)
                                            setFlag1(0)
                                            setFlag2(0)
                                            setTotalScore1(0)
                                            setTotalScore2(0)
                                            setRoundScore1(0)
                                            setRoundScore2(0)
                                            setMessage("")
                                          
                                        }}>Reset Game</button>
    </div>

        <div className="col-md-4 dice">
        <div className="row nested-row-right-player-name">
            <div className="col-md-2"></div>
            <div className="col-md-4 player-name-for-dice"><p className="player-2"><span className="player-names player-2">{playerTwo}'s</span>&nbsp;dice</p></div>
            <div className="col-md-6"></div>
            </div>
       <div className="row nested-row-right-dice">
       <audio id="dice-roll">   
          <source src="./diceroll.mpeg" type="audio/mpeg"></source>
      </audio>
       <button onMouseDown={()=>handleMouseDown(2)}> 
             <img id="dice2" src={ar[index2]} alt="dice-two-img" />
       </button>
       </div>
       <div className="row nested-row-right-scores">
       <div className="col-md-2"></div>
            <div className="col-md-7 score-details">  
            Score: <br />
            Round Score: {roundScore2} <button className="hold-button" onClick={()=>handleHoldClick(2)}>Hold</button> <br />
            Total Score: {totalScore2} <br />
           </div>
            <div className="col-md-3"></div>
       </div>
       </div>
        <div className="col-md-1"></div>
          </div>
        </div>
    )
}
export default GameScreen