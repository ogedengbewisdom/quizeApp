import QUESTIONS from "../../questions";
import React, { useCallback, useState } from "react";
import completeQuiz from "../assets/quiz-complete.png";
import Question from "./Question";

const Quiz = () => {
  const [answered, setAnswered] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const activeQuestionIndex =
    selectedAnswer === "" ? answered.length : answered.length - 1;

  const answeredQuestionHandler = useCallback(
    (selected) => {
      setSelectedAnswer("answered");
      setAnswered((prev) => {
        return [...prev, selected];
      });
      setTimeout(() => {
        if (selected === QUESTIONS[activeQuestionIndex].answers[0]) {
          setSelectedAnswer("correct");
        } else {
          setSelectedAnswer("wrong");
        }
        setTimeout(() => {
          setSelectedAnswer("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const skipUnansweredQuestion = useCallback(
    () => answeredQuestionHandler(null),
    [answeredQuestionHandler]
  );

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={completeQuiz} alt="complete quiz" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  return (
    <div id="quiz">
      <Question
      key={activeQuestionIndex}
        text={QUESTIONS[activeQuestionIndex].text}
        onTimout={skipUnansweredQuestion}
        onAnswer={answeredQuestionHandler}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selected={answered[answered.length - 1]}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
};

export default Quiz;
