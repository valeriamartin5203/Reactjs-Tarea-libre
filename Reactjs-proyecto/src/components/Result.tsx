interface Props {
  score: number;
  restartGame: () => void;
}

function Result({ score, restartGame }: Props) {

  return (
    <div className="card">

      <h2>🏁 Juego terminado</h2>

      <h3>Puntaje final</h3>

      <h1>{score} / 5</h1>

      <button onClick={restartGame}>
        🔄 Reiniciar juego
      </button>

    </div>
  );
}

export default Result;