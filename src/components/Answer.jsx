import React, { useRef } from "react";

const Answer = ({ answers, onAnswer, selected, selectedAnswer }) => {
  const shuffleAnswer = useRef();
  if (!shuffleAnswer.current) {
    shuffleAnswer.current = answers.slice();
    shuffleAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffleAnswer.current.map((answ) => {
        const isSelected = selected === answ;
        let cssClass = "";
        if (
          (selectedAnswer === "correct" || selectedAnswer === "wrong") &&
          isSelected
        ) {
          cssClass = selectedAnswer;
        }
        return (
          <li className="answer" key={answ}>
            <button onClick={() => onAnswer(answ)} className={cssClass}>
              {answ}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answer;
