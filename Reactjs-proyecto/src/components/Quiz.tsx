import { useEffect, useState } from "react";
import Question from "./Question";

interface QuestionType {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Props {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

function Quiz({ setScore, setFinished }: Props) {

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {

    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos:", data);
        if (data.results && Array.isArray(data.results)) {
          setQuestions(data.results);
        } else {
          setError("Error al cargar las preguntas");
        }
      })
      .catch(error => {
        console.error("Error en fetch:", error);
        setError("No se pudo conectar a la API");
      });

  }, []);

  const nextQuestion = () => {

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }

  };

  if (error) {
    return <h2>❌ {error}</h2>;
  }

  if (questions.length === 0) {
    return <h2>Cargando preguntas...</h2>;
  }

  return (
    <div>

      <p>Pregunta {current + 1} de {questions.length}</p>

      <Question
        data={questions[current]}
        nextQuestion={nextQuestion}
        setScore={setScore}
      />

    </div>
  );
}

export default Quiz;