import { useState } from 'react';
import React from 'react';
import {Link, useHistory } from "react-router-dom"
import './css/RulesScreen.css'

function RulesScreen() {

    const history = useHistory();
   
    const [winningScore, setWinningScore]= useState(0)
    const playerOne = history.location.state.player1
    const playerTwo = history.location.state.player2
    const [warning, setWarning] = useState("")

    function handleClick(){
          
        if(winningScore==="0" ||  winningScore===""){
            setWarning("Please add the Winning Score!")
            return false
        }
        if(winningScore<0){
            setWarning("Please add a valid Winning Score!")
            return false;
        }

            setWarning("")
       history.push({pathname: '/gamescreen',
                    state: {
                        player1: playerOne,
                        player2: playerTwo,
                        winningScore: winningScore
                    }    
                })
    }
    return (
        <div className="container-fluid rules-screen">
        <div className="row rules-screen-header">
            <div className="col-md-3"><Link to="/addplayers"><button className="back-to-add-players">Back</button></Link></div>
            <div className="col-md-6 greet-players">
                Hi:&nbsp; <span className="player-names" >{playerOne}</span>&nbsp;&&nbsp;<span className="player-names">
                    {playerTwo}  </span> 
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row rules-screen-middle-upper">
     <div className="col-md-3"></div>
     <div className="col-md-6 rules-list-title">Rules Of The Game</div>
     <div className="col-md-3"></div>
        </div>
        <div className="row rules-screen-middle-bottom">
            <div className="col-md-2"></div>
            <div className="col-md-8 rules-list"> 
            <p>- The game has 2 players, playing in rounds. Players can simply Tap on the device to roll it.</p>
            <p>- A player rolls a dice as many times as they wish. Each result gets added to their ROUND score. Meanwhile other player waits for their turn.</p>
            <p>- The player can choose to 'Hold' their ROUND score in between the turns, which means that their ROUND score gets added to their TOTAL score. After that, its the next player's turn.</p>
          <p>- If the player gets a '1' on the dice, all their ROUND score gets lost. After that, its the next player's turn.</p>
          <p>- The first player to reach or exceed the WINNING score on TOTAL score wins the game.</p></div>
            <div className="col-md-2"></div>
            </div>
            <div className="row set-score-section">
                <div className="col-md-4">
                    </div>
                <div className="col-md-3"><div className="set-score"><input type="number" onChange={(e)=>setWinningScore(e.target.value)} className="input-winning-score" placeholder="Set a Winning Score" /> </div>
                <div className="set-score-warning">
                    {warning}
                    </div>
                    </div>
                <div onClick={handleClick} className="col-md-2 start-play-button-section"><button className="start-playing">Start Playing</button></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}
export default RulesScreen