import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SingleImageComponent from './components/single-image.component';
import MultipleImageComponent from './components/multiple-image.component';

function App() {
  return (
    <div className="App">
      <h3>Image Upload Preview in React</h3>
      <SingleImageComponent />
      <MultipleImageComponent />
    </div>
  );
}

export default App;
