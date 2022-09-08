import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

export const GameOver = () => {
  const [quizState, dispacth] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz!" />
      <button onClick={() => dispacth({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};
