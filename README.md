# QuizApp

1️⃣ Project Title & Overview :-

Project Name: Quiz App with Gamification

Description:
A web-based quiz application that integrates gamification features,dynamically loads questions from a predefined array of objects., and presents an intuitive and engaging user interface.

2️⃣ Features Implemented :-

✅ Data Integration: Fetched quiz data from the provided API (https://api.jsonserve.com/Uw5CrX).

✅ Quiz Flow:

Start screen with a "Start Quiz" button.

Displays multiple-choice questions with a timer.

Real-time score calculation.

Ends with a result screen showing the total score.

✅ Gamification Elements: (If added)

Countdown timer for urgency.

Score tracking and feedback after answering questions.

Progress tracking.

✅ Error Handling:
Used proper state management to prevent crashes.

✅ UI/UX Improvements: Clean and responsive design.

3️⃣Folder Structure :-

quiz-app/

│── src/

│   ├── components/

│   │   ├── StartScreen.js    # Start quiz screen

│   │   ├── StartScreen.css    # Start quiz screen design

│   │   ├── QuizScreen.js     # Main quiz logic & UI

│   │   ├── ResultScreen.js   # Final result screen

│   │   ├── ResultScreen.js    # Final result screen design

│   ├── services/

│   │   ├── quizService.js    # set of questions fetching logic

│   ├── App.js                # Main React component

│   ├── index.js              # Entry point

│── public/

│── README.md                 # Project documentation

│── package.json              # Dependencies


4️⃣  Data Handling :-

1)Fetching Method: Used fetch() in quizService.js with error handling.

2)State Management:

    Stored quiz data in useState().
    
    Handled async operations inside useEffect().
    

5️⃣Challenges Faced & Solutions:-

🔴 Question Not Displaying:

Fixed by ensuring state updates correctly and handling quizData properly.

🔴 React Hooks Warning (useEffect missing dependency):

Ensured that all dependencies were included correctly to avoid unwanted behavior.

6️⃣Future Enhancements :-

🚀 Improvements to consider:

    Add leaderboard & progress tracking.
    Enhance UI with animations.
    Improve gamification with rewards or levels.
    Implement a database for saving scores.

7️⃣Submission Details  (For Testline):-

     GitHub Repository Link: https://github.com/BhagyashriBhakare/QuizApp

8️⃣  Screenshots :-

   QuestionPage.jpeg

🎯 Final Words

"This project was an exciting challenge! I successfully implemented the required quiz flow, handled errors, and improved UI/UX. Looking forward to feedback and further improvements."

