import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import "./App.css";

import Question from "./components/Question";
import Welcome from "./components/Welcome";
import { GameOver } from "./components/GameOver";

function App() {
  const [quizState, dispacth] = useContext(QuizContext);

  useEffect(() => {
    dispacth({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
