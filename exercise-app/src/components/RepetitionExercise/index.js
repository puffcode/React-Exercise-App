import React, { useState } from "react";

const RepetitionExercise = ({ exercise }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const getUnit = (exercise) => {
    switch (exercise) {
      case "Push-ups":
        return "reps";
      case "Running":
        return "laps";
      case "Plank":
        return "seconds";
      case "Squat":
        return "reps";
      default:
        return "units";
    }
  };

  return (
    <div className="repetition-exercise">
      <h2>{exercise}</h2>
      <p>
        {count} {getUnit(exercise)}
      </p>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default RepetitionExercise;
