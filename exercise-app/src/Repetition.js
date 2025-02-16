import React from "react";
import RepetitionExercise from "./components/RepetitionExercise";

const Repetition = ({ name, onBackClick }) => {
  return (
    <div className="repetition-screen">
      <h1>{name}</h1>
      <RepetitionExercise exercise={name} />
      <button className="back-button" onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};

export default Repetition;
