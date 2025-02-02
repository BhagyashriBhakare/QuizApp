# QuizApp

1️⃣ Project Title & Overview

Project Name: Quiz App with Gamification

Description:
A web-based quiz application that integrates gamification features, dynamically fetches quiz data from an API, and presents an intuitive and engaging user interface.

2️⃣ Features Implemented

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
Ensured API fetch errors are handled gracefully.
Used proper state management to prevent crashes.

✅ UI/UX Improvements: Clean and responsive design.

3️⃣Folder Structure

quiz-app/

│── src/

│   ├── components/

│   │   ├── StartScreen.js    # Start quiz screen

│   │   ├── QuizScreen.js     # Main quiz logic & UI

│   │   ├── ResultScreen.js   # Final result screen

│   ├── services/

│   │   ├── quizService.js    # API fetching logic

│   ├── App.js                # Main React component

│   ├── index.js              # Entry point

│── public/

│── README.md                 # Project documentation

│── package.json              # Dependencies


5️⃣ API Usage & Data Handling

1)API Endpoint: https://api.jsonserve.com/Uw5CrX

2)Fetching Method: Used fetch() in quizService.js with error handling.

3)State Management:

    Stored quiz data in useState().
    
    Handled async operations inside useEffect().

4)Handling CORS Issue: Used a proxy method if necessary.

✅ 4. Capture Screenshots & Record a Demo Video

