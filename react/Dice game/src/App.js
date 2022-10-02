import AddPlayers from './Screens/AddPlayers.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import RulesScreen from './Screens/RulesScreen';
import Welcome from './Welcome.js'
import GameScreen from './Screens/GameScreen.js'

function App() {
  return (
    <Router>
   <Switch>

     <Route exact path="/">
     <Welcome />
     </Route>

     <Route path="/addplayers">
    <AddPlayers />
    </Route>

     <Route path="/rulesscreen">
       <RulesScreen />
     </Route>

     <Route path="/gamescreen">
       <GameScreen />
     </Route>

   </Switch>
    </Router>
  );
}

export default App;
