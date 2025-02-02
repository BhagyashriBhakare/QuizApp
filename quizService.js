// src/services/quizService.js

export const fetchQuizData = async () => {
  return [
    {
      question: "Which is the POP language?",
      options: [
        { text: "C++", isCorrect: false },
        { text: "Java", isCorrect: false },
        { text: "C", isCorrect: true },
        { text: "Python", isCorrect: false },
      ],
    },
    {
      question: "Which is an OOP language?",
      options: [
        { text: "C", isCorrect: false },
        { text: "Python", isCorrect: true },
        { text: "COBOL", isCorrect: false },
        { text: "FORTRAN", isCorrect: false },
      ],
    },
    {
      question: "Which is a frontend framework?",
      options: [
        { text: "Node.js", isCorrect: false },
        { text: "React", isCorrect: true },
        { text: "Django", isCorrect: false },
        { text: "Laravel", isCorrect: false },
      ],
    },
  ];
};
