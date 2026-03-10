import { useEffect, useState } from "react";

interface QuestionType {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Props {
  data: QuestionType;
  nextQuestion: () => void;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

function Question({ data, nextQuestion, setScore }: Props) {

  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {

    if (!data?.incorrect_answers || !Array.isArray(data.incorrect_answers)) {
      console.error("Error: datos inválidos", data);
      return;
    }

    const answers = [
      ...data.incorrect_answers,
      data.correct_answer
    ];

    setOptions(answers.sort(() => Math.random() - 0.5));

  }, [data]);

  const checkAnswer = (option: string) => {

    if (option === data.correct_answer) {
      setScore(prev => prev + 1);
    }

    nextQuestion();

  };

  return (
    <div className="card">

      <h2 dangerouslySetInnerHTML={{ __html: data.question }} />

      <div className="options">

        {options.map((option, index) => (

          <button
            key={index}
            onClick={() => checkAnswer(option)}
            dangerouslySetInnerHTML={{ __html: option }}
          />

        ))}

      </div>

    </div>
  );
}

export default Question;