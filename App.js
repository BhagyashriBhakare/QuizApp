import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import { fetchQuizData } from "./services/quizService";
import './App.css';


function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("start");
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuizData().then(data => setQuizData(data));
  }, []);

  return (
    <div className="app">
      {currentScreen === "start" && <StartScreen onStart={() => setCurrentScreen("quiz")} />}
      {currentScreen === "quiz" && <QuizScreen quizData={quizData} setScore={setScore} onFinish={() => setCurrentScreen("result")} />}
      {currentScreen === "result" && <ResultScreen score={score} totalQuestions={quizData.length} />}

    
    </div>
  );
}

export default App;