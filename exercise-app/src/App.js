import React from "react";
import GlobalStyle from "./styles";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <h1>Select an Exercise</h1>
          <div className="exercise-buttons">
            <button className="exercise-button">Push-ups</button>
            <button className="exercise-button">Running</button>
            <button className="exercise-button">Plank</button>
            <button className="exercise-button">Squat</button>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
