import React from "react";
import ProgressBar from "./ProgrssBar";
import Answer from "./Answer";

const Question = ({text, onTimout, onAnswer, answers, selected, selectedAnswer}) => {
  return (
    <div id="question">
      <ProgressBar
        timer={100000}
        onTimout={onTimout}
      />
      <h2>{text}</h2>
      <Answer
        onAnswer={onAnswer}
        selected={selected}
        selectedAnswer={selectedAnswer}
        answers={answers}
      />
    </div>
  );
};

export default Question;
