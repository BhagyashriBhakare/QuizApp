import React from "react";
import "./StartScreen.css"; // Importing the CSS file

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-container">
      <h1>🎯 Welcome to the Quiz!</h1>
      <p>Test your knowledge and challenge yourself.</p>
      <button onClick={onStart}>🚀 Start Quiz</button>
    </div>
  );
};

export default StartScreen;
