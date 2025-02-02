import React, { useState, useEffect } from "react";

const QuizScreen = ({ quizData, setScore, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(10);
    } else {
      onFinish();
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    handleNextQuestion();
  };

  return (
    <div className="quiz-container">
      <h2>{quizData[currentQuestion]?.question}</h2>
      <p>⏳ Time Left: {timeLeft} seconds</p>
      {quizData[currentQuestion]?.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
          {option.text}
        </button>
      ))}
    </div>
  );
  
};

export default QuizScreen;
