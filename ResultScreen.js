import React from "react";
import "./ResultScreen.css"; // Importing the CSS file

const ResultScreen = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h1>🎉 Quiz Completed!</h1>
      <div className="score-card">
        <p>Your Score:</p>
        <h2>{score} / {totalQuestions}</h2>  {/* Dynamic total questions */}
      </div>
      <button onClick={() => window.location.reload()}>🔄 Try Again</button>
    </div>
  );
};

export default ResultScreen;
