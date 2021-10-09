import './css/Welcome.css'
import {Link} from 'react-router-dom'

function Welcome() {

  return (
    <div className="container-fluid welcome-screen">
   <div className="row welcome-screen-header">
     <div className="col-md-3"></div>
   <div className="col-md-6 welcome-screen-title">Welcome to the Dice Game</div>
   <div className="col-md-3"></div>
   </div>
   <div className="row welcome-screen-middle">
   <div className="col-md-3"></div>
   <div className="col-md-6 welcome-img-section"><img className="dice-image" src="./dice-image.png" alt="dice-img" /></div>
   <div className="col-md-3"></div>
   </div>
   <div className="row welcome-screen-bottom">
   <div className="col-md-4"></div>
   <div className="col-md-4 welcome-screen-button-section"><Link to="/addplayers"><button className="start-button"> Start Playing </button></Link></div>
   <div className="col-md-4"></div>   
   </div>
    </div>
  );
}

export default Welcome