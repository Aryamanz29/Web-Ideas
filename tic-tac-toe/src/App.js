import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'
function App() {
return(
  <Router>
  <Switch>
    <Route exact path="/">
      <Welcome />
    </Route>
  </Switch>
  <Switch>
    <Route path="/gamescreen">
      <GameScreen />
    </Route>
  </Switch>
</Router>
)
}
function Welcome(){
  const history = useHistory();
  const [playerOne, setPlayerOne] = useState("")
  const [playerTwo, setPlayerTwo] = useState("")
  const [totalRounds, setTotalRounds] = useState(0)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">

        </div>
        <div className="col-md-6">
        <div className="row section-title">Rules-</div>
        <div className="row section-content">
          <ul>
          <li>The game will be in rounds.</li>
          <li>The total number of rounds in the game would be set by you.</li>
          <li>The player to win a round gets one point incremented on thier total score.</li>
          <li>The player having more score at the end of all the round WINS.</li>
          </ul>
          </div>
        </div>
        <div className="col-md-4">

        </div>
      </div>
      <div className="row add-inputs">
      <div className="col-md-3"></div>
        <div className="col-md-2"><input type="text" value={playerOne} onChange={(e)=>setPlayerOne(e.target.value)} placeholder="Add Player 1" /></div>
        <div className="col-md-2"><input type="text" value={playerTwo} onChange={(e)=>setPlayerTwo(e.target.value)} placeholder="Add player 2" /></div>
        <div className="col-md-2"><input type="number" value={totalRounds} onChange={(e)=>setTotalRounds(e.target.value)} placeholder="Set Total No. Of Rounds" /></div>
        <div className="col-md-1"><button onClick={()=>{
         history.push({pathname: '/gamescreen',
         state: {
           playerOne: playerOne,
           playerTwo: playerTwo,
           totalRounds : totalRounds
         }
        })
        }}>Play!</button></div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
function GameScreen(){
  
  const history = useHistory();
  const [cellValue, setCellValue] = useState([])
  const [clickCount, setClickCount] = useState(-1)
  const [isTapped, setIsTapped] = useState([])
  const [displayMessage, setDisplayMessage] = useState("")
  const [score1, setScore1]= useState(0)
  const [score2, setScore2] = useState(0)
  const playerOne = useState(history.location.state.playerOne)
  const playerTwo= useState(history.location.state.playerTwo)
  const totalRounds = useState(history.location.state.totalRounds[0])
  const [currentRound, setCurrentRound] = useState(1)
  const [isThisRoundOver , setIsThisRoundOver] = useState(0)
  
 useEffect(()=>{

    if(currentRound==totalRounds[0] && isThisRoundOver===1 && score1===score2){
      setDisplayMessage("The Game has ended in a Draw.")
      return;
    }
    let resp = [...cellValue]
    let someCellIsEmpty = false;
    for(let i=0; i<9; i++){
      if(resp[i]===""){
        someCellIsEmpty=true;
        break;
      }
    }
    if(clickCount===8 && isThisRoundOver===0 && someCellIsEmpty===false){
      if(currentRound<totalRounds[0]){
        setDisplayMessage("Draw.")
        setIsThisRoundOver(1)
      }
      else if(currentRound==totalRounds[0]){
        score1>score2? setDisplayMessage("Player 1 has Won the Game!"):setDisplayMessage("Player 2 has Won the Game!")
        setIsThisRoundOver(1)
      }
     else {
       setDisplayMessage("The Game has ended in a Draw.")
     }
    }
    if(isThisRoundOver===0){
        if(cellValue[0]==="X" && cellValue[3]==="X" && cellValue[6]==="X" ||
   cellValue[1]==="X" && cellValue[4]==="X" && cellValue[7]==="X" ||
   cellValue[2]==="X" && cellValue[5]==="X" && cellValue[8]==="X" ||
   cellValue[0]==="X" && cellValue[1]==="X" && cellValue[2]==="X" ||
   cellValue[3]==="X" && cellValue[4]==="X" && cellValue[5]==="X" ||
   cellValue[6]==="X" && cellValue[7]==="X" && cellValue[8]==="X" ||
   cellValue[0]==="X" && cellValue[4]==="X" && cellValue[8]==="X" ||
   cellValue[2]==="X" && cellValue[4]==="X" && cellValue[6]==="X"
   ) {
    setScore1(score1+1)
    setIsThisRoundOver(1)
    if(currentRound==totalRounds[0]){
      score1>score2?setDisplayMessage("Player 1 has Won the Game!"):setDisplayMessage("Player 2 has Won the Game!")
    }
    else {
      setDisplayMessage("Player 1 Wins this Round.")
    }
   }

   if(cellValue[0]==="O" && cellValue[3]==="O" && cellValue[6]==="O" ||
   cellValue[1]==="O" && cellValue[4]==="O" && cellValue[7]==="O" ||
   cellValue[2]==="O" && cellValue[5]==="O" && cellValue[8]==="O" ||
   cellValue[0]==="O" && cellValue[1]==="O" && cellValue[2]==="O" ||
   cellValue[3]==="O" && cellValue[4]==="O" && cellValue[5]==="O" ||
   cellValue[6]==="O" && cellValue[7]==="O" && cellValue[8]==="O" ||
   cellValue[0]==="O" && cellValue[4]==="O" && cellValue[8]==="O" ||
   cellValue[2]==="O" && cellValue[4]==="O" && cellValue[6]==="O"
   ) {
    setScore2(score2+1)
    setIsThisRoundOver(1)
    if(currentRound==totalRounds[0]){
      score1>score2?setDisplayMessage("Player 1 has Won the Game!"):setDisplayMessage("Player 2 has Won the Game!")
    }
    else {
      setDisplayMessage("Player 2 Wins this Round.")
    }
    }
    }  
 }, [cellValue, isThisRoundOver])

  function handleClick(cellNum){
   console.log(totalRounds)
    if(isThisRoundOver===1){
      currentRound==totalRounds[0]?setDisplayMessage("Game Over."):setDisplayMessage("This Round Is Over.")
      return false;
    }
    
      
   if(isTapped[cellNum]===1){
     return false;
   }
   setClickCount(clickCount+1)

    let arr = [...cellValue]
    arr[cellNum] = clickCount%2===0? "O": "X"
    setCellValue(arr)
   
    let ar = [...isTapped]
    ar[cellNum]=1;
    setIsTapped(ar)
    
  }

  return (
    <div className="App container">
      <div className="row ">
        <div className="col-md-2"><Link to="/"><button>Back</button></Link></div>
        <div className="col-md-8 display-message-section">{displayMessage}</div>
        <div className="col-md-2"></div></div>
     <div className="row score-section">
       <div className="player-one-score">{playerOne}'s Score: {score1}</div>
    <div className="score-section-middle"></div>
       <div className="player-two-score">{playerTwo}'s Score: {score2}</div>
     </div>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 game-box-col">
       <div className="game-box">
     <div className="grid-row">
      <div className="cell" onClick={()=>handleClick(0)}>{cellValue[0]}</div>
     <div className="cell" onClick={()=>handleClick(1)}>{cellValue[1]}</div>
     <div className="cell" onClick={()=>handleClick(2)}>{cellValue[2]}</div>
     </div>
     <div className="grid-row">
       <div className="cell" onClick={()=>handleClick(3)}>{cellValue[3]}</div>
     <div className="cell" onClick={()=>handleClick(4)}>{cellValue[4]}</div>
     <div className="cell" onClick={()=>handleClick(5)}>{cellValue[5]}</div>
     </div>
     <div className="grid-row">
       <div className="cell" onClick={()=>handleClick(6)}>{cellValue[6]}</div>
     <div className="cell" onClick={()=>handleClick(7)}>{cellValue[7]}</div>
     <div className="cell" onClick={()=>handleClick(8)}>{cellValue[8]}</div>
     </div>
     </div>
       </div>
       <div className="col-md-3">

       </div>
    </div>
     <div className="row bottom-message-section"> 
     <div className="col-md-3"></div>
     <div className="col-md-3 total-rounds">Total Round(s): {totalRounds[0]}</div>
     <div className="col-md-3 current-round">Current Round: {currentRound}</div>
     <div className="col-md-3"></div>
     </div>
     <div className="row reset-btn-section"><button onClick={()=>{
       if(currentRound==totalRounds[0]){
         setIsThisRoundOver(0)
         setCurrentRound(0)
         setScore1(0)
         setScore2(0)
         setCellValue([])
         setClickCount(-1)
         setIsTapped([])
         setDisplayMessage("")
         setIsThisRoundOver(0)
         return false;
       }
       if(isThisRoundOver===1){
       setCurrentRound(currentRound+1)
      }
      else {
       setCurrentRound(0)
       setScore1(0)
       setScore2(0)
      }
      setCellValue([])
      setClickCount(-1)
      setIsTapped([])
      setDisplayMessage("")
      setIsThisRoundOver(0)
     }}>{isThisRoundOver===1?(currentRound==totalRounds[0]?<span>Reset</span>:<span>Next Round</span>):<span>Reset</span>}</button></div>
    </div>
  );
}
export default App;
