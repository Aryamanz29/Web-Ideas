import React, { Component } from "react";
import JokeList from "./JokeList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <JokeList />
      </div>
    );
  }
}

export default App;
