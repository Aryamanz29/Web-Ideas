import "./css/App.css"
import {useState, useEffect} from "react"
import React from "react"
import {Switch, Route, useHistory} from "react-router-dom"
// import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

function App() {

  return (
    <div className="App-screen container-fluid">
    <div className="row header-section">
      <div className="col-md-3 header-left-col">
        logo 1
        </div>
        <div className="col-md-6 header-middle-col">
          Quiz App
        </div>
        <div className="col-md-3 header-right-col">
         logo 2
        </div>
         </div>
         <div className="row sub-header">
        <div className="col-md-12 questions-palette">
        </div>
         </div>
         <div className="row middle-section">
           <Switch>   
           <Route exact path="/">
             <GreetUser />
           </Route> 
          <Route path="/questiontemplate">
            <QuestionTemplate />
          </Route>
          <Route path="/greetuser">
            <GreetUser />
          </Route>
          <Route path="/scorecard">
          <ScoreCard />
          </Route>
           </Switch>
         </div>
       
    </div>
  );
}
function QuestionTemplate(){
  const history = useHistory(); 
  
  var questionsList = {
    0: {
       ques: "Who was the first President of India?",
       option1: "Mahatma Gandhi",
       option2: "Modi",
       option3: "Rajendra Prasad",
       option4: "Jawarhar Lal Nehru",
       correct_option: 3
     },
    1: {ques: "Which country's national game is cricket?",
    option1: "Australia",
    option2: "England",
    option3: "South-Africa",
    option4: "India" ,
    correct_option: 2
   },
    2: {ques:"What is the full form of URL?",
    option1: "Uniform Resource Locator",
    option2: "Universal Resource Link",
    option3: "Universal Read Link",
    option4: "Universal Read Locator" ,
    correct_option: 1
   },
   3: {ques: "Who is the CEO of Google?",
   option1: "Satya Nadella",
   option2: "Sundar Pichai",
   option3: "Jeff Bezos",
   option4: "Jack Ma" ,
   correct_option: 2
   },
   4: {
     ques: "Who was the founder of JAVA?",
     option1: "Mool Chand Ji",
     option2: "Daniel Weber",
     option3: "Guido van Rossum",
     option4: "James Gosling",
     correct_option: 4
   },
   5: {
     ques: "Which is the hottest Planet?",
     option1: "Venus",
     option2: "Mercury",
     option3: "Mars",
     option4: "Jupitor",
     correct_option: 1
   },
   6: {
     ques: "Who is the current CEO of Github?",
     option1:"Nat Friedman",
     option2: "Chris Wanstrath",
     option3: "Rajnath Singh",
     option4: "Alison Tyler",
     correct_option: 1
   },
   7: {
     ques: "Which was the first English news paper of India?",
     option1: "Hindustan Times",
     option2: "Times of India",
     option3: "Hicky's Bengal Gazette",
     option4: "Amar Ujala",
     correct_option: 3
   },
   8: {
     ques: "Which was the first ever movie released in India?",
     option1: "Mugle Azam",
     option2: "Tere Naam",
     option3: "Angoor",
     option4: "Raja Harishchandra",
     correct_option: 4
   },
   9: {
     ques: "\"East or west Web Developers are the best.\"",
     option1: "Hell Yes!",
     option2: "I think yes",
     option3: "They are quite good",
     option4: "I am not sure",
     correct_option: 1
   }
   }
      
   var objectLength = Object.keys(questionsList).length

const [score, setScore] = useState(0)
const [flag, setFlag] = useState(0)
const [seconds, setSeconds] = useState(59)
const [minutes, setMinutes] = useState(59)
var [response, setResponse] = useState([])
var [isAnswered, setIsAnswered] = useState()
var noOfQuestions = 10;
const [index, setIndex] = useState(0)
const [pageIsLoaded, setPageIsLoaded] = useState(0)
const [lastResponse, setLastResponse] = useState(0)
const [isChangingResp, setIsChangingResp] = useState(0)
const [questionIsChanged, setQuestionIsChanged] = useState(0)
const [isVisited, setIsVisited] = useState([])
const [lastQuestionIndex, setLastQuestionIndex] = useState(0)
const [isLastQuestionMarkedForReview, setIsLastQuestionMarkedForReview] = useState(0)
const [display, setDisplay] = useState("")

const id = React.useRef(null);
const clear=()=>{
window.clearInterval(id.current)
}

useEffect(()=>{
 if(pageIsLoaded===0){

  let resp = []
  for(let i = 0; i<noOfQuestions; i++){
      resp[i] = 0
  }
  setResponse(resp)
  setPageIsLoaded(pageIsLoaded+1)

 }
 if(isAnswered===1){
   let m = [...isVisited]
   m[index] = "#84B241"
   setIsVisited(m)
 }
    id.current=window.setInterval(()=>{
      setSeconds((time)=>time-1)
    },1000)
    return ()=>clear();

    //eslint-disable-next-line
},[pageIsLoaded, lastResponse, lastQuestionIndex, isAnswered, noOfQuestions])

 useEffect(()=>{
  if(isChangingResp===0){
       if(response[history.location.state.quesNum-1]===1) {
    document.getElementById("option1").style.borderColor="#74db4b"
}
if(response[history.location.state.quesNum-1]===2) {
    document.getElementById("option2").style.borderColor="#74db4b"
}
if(response[history.location.state.quesNum-1]===3) {
    document.getElementById("option3").style.borderColor="#74db4b"
}
if(response[history.location.state.quesNum-1]===4) {
    document.getElementById("option4").style.borderColor="#74db4b"
}
setQuestionIsChanged(0)
  }

  if(seconds===-1){
    setMinutes(minutes-1)
    setSeconds(59)
   }
   if(minutes===0 && seconds===-1){
    swal("Time's Up!");
    history.push({pathname: '/scorecard', state: {score: score}})
    clear()
   }
},[seconds,minutes,history,score, isChangingResp, response, questionIsChanged])


function handleResponse(option_num, quesNum){
  
  setDisplay("")
  var correct_option = questionsList[quesNum-1].correct_option
 
      if(response[quesNum-1]===0){

        setLastResponse(option_num)
        setIsAnswered(1)

        document.getElementById("option1").style.borderColor="#107EEB"
        document.getElementById("option2").style.borderColor="#107EEB"
        document.getElementById("option3").style.borderColor="#107EEB"
        document.getElementById("option4").style.borderColor="#107EEB"
      
        if(score===objectLength){
          return;
        }
       
        if(flag===1 && option_num!== correct_option){
          setScore(score-1)
          setFlag(0)
        }
        
         if(option_num===correct_option && flag===0 && response[quesNum-1]===0){
              setScore(score+1)
              setFlag(1)
            }
        if(option_num===1) {
             document.getElementById("option1").style.borderColor="#74db4b"
        }
        if(option_num===2) {
             document.getElementById("option2").style.borderColor="#74db4b"
        }
        if(option_num===3) {
             document.getElementById("option3").style.borderColor="#74db4b"
        }
        if(option_num===4) {
             document.getElementById("option4").style.borderColor="#74db4b"
        }
      }
      if(response[quesNum-1]!==0){
        if(response[quesNum-1]===option_num && isChangingResp===0){
          setIsChangingResp(1)
        }
        if(response[quesNum-1]!== correct_option && isChangingResp===0){
         option_num===correct_option? setScore(score+1): setScore(score)
        }
        if(response[quesNum-1]===correct_option && isChangingResp===0 && option_num!==correct_option){
          setScore(score-1)
          setFlag(0)
          setIsChangingResp(1)
          setIsAnswered(1)
        }
        else{ 
          setIsChangingResp(1)
          setLastResponse(option_num)
          setIsAnswered(1)
        if(score===objectLength){
          return;
        }
       
        if(flag===1 && option_num!== correct_option){
          setScore(score-1)
          setFlag(0)
        }
        
         if(option_num===correct_option && flag===0 && isChangingResp===1){
              setScore(score+1)
              setFlag(1)
            }       
          }
          document.getElementById("option1").style.borderColor="#107EEB"
          document.getElementById("option2").style.borderColor="#107EEB"
          document.getElementById("option3").style.borderColor="#107EEB"
          document.getElementById("option4").style.borderColor="#107EEB"
          if(option_num===1) {
            document.getElementById("option1").style.borderColor="#74db4b"
       }
       if(option_num===2) {
            document.getElementById("option2").style.borderColor="#74db4b"
       }
       if(option_num===3) {
            document.getElementById("option3").style.borderColor="#74db4b"
       }
       if(option_num===4) {
            document.getElementById("option4").style.borderColor="#74db4b"
       }
       
      }
    }


  function handleClick(i, click_status){
    setDisplay("")

    if(lastQuestionIndex===i && click_status !== -4 && click_status!== 2){
      return;
    }
    let m = [...isVisited]
   if(click_status===-4){

  if (isVisited[i]==="#84B241" || isVisited[i]==="" || isVisited[i]==="#706897"){
    m[i]=""
    setIsVisited(m)
   response[i]===questionsList[i].correct_option? setScore(score-1):setScore(score)
  }
  if(isAnswered===1) {
    lastResponse===questionsList[i].correct_option?setScore(score-1):setScore(score)
  }
  document.getElementById("option1").style.borderColor="#107EEB"
  document.getElementById("option2").style.borderColor="#107EEB"
  document.getElementById("option3").style.borderColor="#107EEB"
  document.getElementById("option4").style.borderColor="#107EEB"
  let ar = [...response]
  ar[i]=0;
  setResponse(ar)
  setLastQuestionIndex(i)
    setIsAnswered(0)
    setFlag(0)
    setLastResponse(0)
     return;
     
   }
  
    if(click_status===2){
      if(response[i] || lastResponse>0){
        m[i] = "#706897" //purple
      setIsVisited(m)
      setLastQuestionIndex(i)
      setIsLastQuestionMarkedForReview(1)
      }
      else {
        setDisplay("First, Give the Response.")
      }
      return;
    }
    if(click_status===0 && lastResponse===0 && response[lastQuestionIndex]===0){
     m[lastQuestionIndex] = "#E54C32"
     setIsVisited(m)
     if(lastQuestionIndex===i){
       return;
     }
    }
    if(click_status===0 && response[lastQuestionIndex]===0){
     m[lastQuestionIndex] = "#E54C32" //red
     setIsVisited(m)
    }
    if(lastResponse===0 && click_status!==0 && response[lastQuestionIndex]===0){
     m[click_status===1?i-1:i+1] = "#E54C32"; //red
     setIsVisited(m)
    }  
    if(lastResponse>0 ){
     isLastQuestionMarkedForReview===1? m[lastQuestionIndex]="#706897":m[lastQuestionIndex]="#84B241" //green
     setIsVisited(m)
    }
  setIsLastQuestionMarkedForReview(0)
   setQuestionIsChanged(1)
  setScore(score)
 setFlag(0)
 
   if(isAnswered===1){
     let newAr = [...response];
     if(click_status===1 || click_status===-1){
       newAr[click_status===1?i-1:i+1] = lastResponse;
     }
     else {
       newAr[index] = lastResponse;
     }
     setResponse(newAr);
     setIsAnswered(0)
     setIsChangingResp(0)
     setLastResponse(0)
   } 
   
 if(history.location.state.quesNum === noOfQuestions && click_status===1){
   return;
 }
else {
 document.getElementById("option1").style.borderColor="#107EEB"
 document.getElementById("option2").style.borderColor="#107EEB"
 document.getElementById("option3").style.borderColor="#107EEB"
 document.getElementById("option4").style.borderColor="#107EEB"
 setIndex(i)
}

setLastQuestionIndex(i)
history.push({
             pathname: '/questiontemplate',
             state: {
               quesNum: i+1,
               question: questionsList[i].ques,
               option1: questionsList[i].option1,
               option2: questionsList[i].option2,
               option3: questionsList[i].option3,
               option4: questionsList[i].option4,
               correct_option: questionsList[i].correct_option
             }
             })
}
var ar = []
var j = 1
for(var i=0; i<noOfQuestions; i++){
  
  ar[i] = j;
  j++;
}


    const buttonForEachQuestion = ar.map((i, id)=><button className="ques-navigation-buttons" key={id} style={{backgroundColor: isVisited[id]}} onClick={()=>handleClick(id,0)}>{i}</button>)
  
  return(
    <div className="question-template row">
    <div className="col-md-8 question-template-left">
      <div className="row display-section-row">
        <div className="col-md-2"></div>
        <div className="col-md-8 display-section">{display}</div>
        <div className="col-md-2"></div>
      </div>
    <div className="row ">
      {/* This APP is under construction currently ._. */}
            <div className="col-md-2"><span className="ques-num">{history.location.state.quesNum}/{noOfQuestions}</span></div>
          <div className="col-md-8 question-statement">  {history.location.state.question}</div>
          <div className="col-md-2"><span className="count-down">{minutes}:{seconds%10===seconds?<span>0{seconds}</span>:<span>{seconds}</span>}</span></div>
            </div>
          <div className="row">
            <div className="col-md-3"> 
            </div>
          <div className="col-md-9 option-section"> 
           <ul className="options">
            <li id="option1" onMouseDown={()=>handleResponse(1, history.location.state.quesNum)}>A. {history.location.state.option1}</li>
            <li id="option2" onMouseDown={()=>handleResponse(2, history.location.state.quesNum)}>B. {history.location.state.option2}</li>
            <li id="option3" onMouseDown={()=>handleResponse(3, history.location.state.quesNum)}>C. {history.location.state.option3}</li>
            <li id="option4" onMouseDown={()=>handleResponse(4, history.location.state.quesNum)}>D. {history.location.state.option4}</li>
          </ul>
          </div>
        </div>
        <div className="row question-template-buttons-section">
          <div className="col-md-3">
          {/* Score:{score}, Last Resp: {lastResponse} */}
          </div>
          <div className="col-md-3 mark-for-review-button"><button onClick={()=>handleClick(history.location.state.quesNum-1,2)}>Mark For Review</button></div>
          <div className="col-md-2 clear-response-button">
          <button  onClick={()=>handleClick(history.location.state.quesNum-1,-4)}>Clear</button>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row navigation-buttons footer">
        <div><button onClick={()=>handleClick(index-1<0?index: index-1,-1)}>Prev</button></div>
       <div><button onClick={()=>handleClick(index===noOfQuestions-1? index: index+1,1)}>Next</button></div>
       <div><button  onClick={()=>{
         swal({
          title: "Are you sure to Abort the Quiz?",
          text: "Once you click 'OK', you will not be able to return back and your Score till now would not be shown.",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            history.push({pathname: './greetuser', state: { score: score }})
            swal("Quiz Aborted!", {
              icon: "success",
            });
          } else {
          }
        });
         }} >Abort</button></div>
       <div><button onClick={()=>{
         swal({
          title: "Are you sure to Submit the Quiz?",
          text: "If you Submit the quiz, you will not be able to return back.",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            history.push({pathname: './scorecard', state: { score: score }})
            swal("Quiz Submitted!", {
              icon: "success",
            });
          } else {
          }
        });
         }}>Submit</button></div>
         </div>
    </div>
    <div className="col-md-4 question-template-right">
    <div className="row ques-buttons">{buttonForEachQuestion} </div>
    <div className="row instructions">
      <div><span className="red"></span> Not Answered</div>
      <div><span className="green"></span> Answered</div>
      <div><span className="purple"></span> Marked For Review</div>

    </div>
    </div>
        </div>
  )
}

function GreetUser(){
  const history = useHistory();

  function handleClick(){
    history.push({
      pathname: '/questiontemplate',
      state: {
        quesNum: 1,
        question: "Who was the first President of India?",
        option1: "Mahatma Gandhi",
        option2: "Chandrashekhar Azad",
        option3: "Rajendra Prasad",
        option4: "Jawarhar Lal Nehru" ,
        correct_option: 3
      }
      })
  }
  return(
    <div className="greet-screen">
     <div className="greet-user">Hello, User</div>
     <div className="start-quiz"><button onClick={()=>handleClick(0)}>Start</button></div>
      </div>
  )
}

function ScoreCard(){
  const history = useHistory();
  return(
    <div className="score-card-template">
      <div  className="score">Your score is {history.location.state.score} </div>
      <div className="reset-btn-section"><button className="reset-quiz-btn" onClick={()=>history.push({pathname: '/'})}>Restart Quiz</button></div>
    </div>
  )
}


export default App;
 
