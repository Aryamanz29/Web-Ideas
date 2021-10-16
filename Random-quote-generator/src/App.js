import React, { useState } from "react";

import "./App.css";
import Quote from "./Quote";
import Navbar from "./Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  return (
    <div className = "App">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <header className="App-header" style={isDarkMode ? { backgroundColor: "#2d3647" } : { backgroundColor: "#e2eefa" }}>
        <h1 className={isDarkMode ? "text-center mb-5 text-light " : "text-center mb-5 text-dark"}>Random Quote Generator</h1>
        <Quote isDarkMode={isDarkMode}/>
      </header>
    </div>
  );
}

export default App;
