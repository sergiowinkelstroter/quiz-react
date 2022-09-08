import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

export const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispacth] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        `}
    >
      {}
      <p>{option}</p>
    </div>
  );
};
