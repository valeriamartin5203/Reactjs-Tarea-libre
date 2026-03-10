import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {

  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  const restartGame = () => {
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="container">

      <h1>🎮 Trivia Game</h1>

      {!finished ? (
        <Quiz setScore={setScore} setFinished={setFinished}/>
      ) : (
        <Result score={score} restartGame={restartGame}/>
      )}

    </div>
  );
}

export default App;