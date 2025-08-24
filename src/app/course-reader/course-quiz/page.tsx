"use client";

import React, { useState } from "react";
import "../../../assets/styles/coursequiz.css";

interface QuizState {
  selectedAnswers: { [key: number]: string };
  submittedQuestions: { [key: number]: boolean };
}

const CourseQuiz = () => {
  // Quiz questions data
  const questions = [
    {
      id: 1,
      question:
        "لقد باتت اللغة العربية تواجه تحديات جسيمة في عصر الرقمنة والعولمة، حيث تتزاحم اللغات الأجنبية في كل زاوية من زوايا حياتنا اليومية، من التعليم إلى الإعلام وحتى مواقع التواصل الاجتماعي. ومع ذلك، تبقى اللغة العربية قادرة على التكيف، إذا ما وُجدت الإرادة الحقيقية لدعمها عبر المناهج الدراسية والتكنولوجيا والتعليم الحديث.\n\nالسؤال: ما الفكرة الرئيسة التي يطرحها الكاتب في هذا المقطع؟",
      options: [
        "وسائل التواصل الاجتماعي ساعدت في تقوية اللغة العربية.",
        "اللغات الأجنبية أصبحت أكثر أهمية من اللغة العربية.",
        "التكنولوجيا الحديثة تهدد وجود اللغة العربية.",
        "اللغة العربية تواجه تحديات لكنها قادرة على التكيف بالدعم المناسب."
      ],
      correctAnswer: "4"
    },
    {
      id: 2,
      question: "السؤال الثاني: ما هي أقسام الكلمة في اللغة العربية؟",
      options: [
        "فعل، اسم، حرف",
        "مفرد، مثنى، جمع",
        "مذكر، مؤنث",
        "معرف، نكرة"
      ],
      correctAnswer: "1"
    }
  ];

  // Handle empty questions
  if (questions.length === 0) {
    return (
      <div className="quizinfo">
        <p className="no-questions">
          ⚠️ لا توجد أسئلة متاحة في هذا الاختبار حالياً.
        </p>
      </div>
    );
  }

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [quizState, setQuizState] = useState<QuizState>({
    selectedAnswers: {},
    submittedQuestions: {}
  });

  const itemsPerPage = 1;
  const totalItems = questions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentQuestionIndex = (currentPage - 1) % questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = quizState.selectedAnswers[currentQuestionIndex] || "";
  const isSubmitted = quizState.submittedQuestions[currentQuestionIndex] || false;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  // Calculate scores
  const calculateScores = () => {
    let correctCount = 0;
    let incorrectCount = 0;

    for (let i = 0; i < questions.length; i++) {
      if (quizState.submittedQuestions[i]) {
        if (quizState.selectedAnswers[i] === questions[i].correctAnswer) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }
    }

    const score = (correctCount / questions.length) * 20;

    return {
      correctCount,
      incorrectCount,
      score: Math.round(score * 10) / 10 // Round to 1 decimal place
    };
  };

  const { correctCount, incorrectCount, score } = calculateScores();

  const handleAnswerChange = (value: string): void => {
    if (!isSubmitted) {
      setQuizState(prev => ({
        ...prev,
        selectedAnswers: {
          ...prev.selectedAnswers,
          [currentQuestionIndex]: value
        }
      }));
    }
  };

  const handleSubmit = (): void => {
    if (!selectedAnswer) {
      alert("يرجى اختيار إجابة قبل التقديم");
      return;
    }

    setQuizState(prev => ({
      ...prev,
      submittedQuestions: {
        ...prev.submittedQuestions,
        [currentQuestionIndex]: true
      }
    }));
  };

  const handlePageChange = (page: number): void => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="quizinfo">
      {/* Score Header */}
      <div className="score-header">
        <div className="score-item">
          <span className="score-title">الإجابات الصحيحة</span>
          <span className="correct-score">{correctCount}</span>
        </div>

        <div className="score-item">
          <span className="score-title">النتيجة</span>
          <span className="total-score">{score}/20</span>
        </div>

        <div className="score-item">
          <span className="score-title">الإجابات الخاطئة</span>
          <span className="incorrect-score">{incorrectCount}</span>
        </div>
      </div>

      <div className="top1">
        <div className="teacher-course">
          <p className="cr-name">دورة: الإتقان في اللغة العربية للبكالوريا</p>
          <p className="tc-name">الأستاذ سامي قرفي</p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitted}
          className="submit-btn"
        >
          {isSubmitted ? "تم التقديم" : "تقديم الإجابة"}
        </button>
      </div>

      <hr className="hr-quiz" />

      {isSubmitted && (
        <div className={`quiz-result ${isCorrect ? "correct" : "incorrect"}`}>
          <h3>{isCorrect ? "✅ إجابة صحيحة!" : "❌ إجابة خاطئة"}</h3>
          <p>
            {isCorrect
              ? "أحسنت! لقد اخترت الإجابة الصحيحة."
              : `الإجابة الصحيحة هي الخيار رقم ${currentQuestion.correctAnswer}`}
          </p>
        </div>
      )}

      <div className="question-quiz">
        <p className="question-text">{currentQuestion.question}</p>
      </div>

      <div className="quiz-answers">
        {currentQuestion.options.map((option, index) => {
          const optionNumber = (index + 1).toString();
          let answerClass = "one-answer";

          if (isSubmitted) {
            if (optionNumber === currentQuestion.correctAnswer) {
              answerClass += " show-correct";
            } else if (optionNumber === selectedAnswer) {
              answerClass += " selected-wrong";
            }
          } else if (selectedAnswer === optionNumber) {
            answerClass += " selected";
          }

          return (
            <label key={index} className={answerClass}>
              <input
                type="radio"
                name="answer"
                value={optionNumber}
                checked={selectedAnswer === optionNumber}
                onChange={(e) => handleAnswerChange(e.target.value)}
                disabled={isSubmitted}
              />
              <span
                className={`num-ans ${
                  isSubmitted && optionNumber === currentQuestion.correctAnswer
                    ? "correct"
                    : ""
                }`}
              >
                {optionNumber}
              </span>
              <span
                className={`whole-ans ${
                  isSubmitted && optionNumber === currentQuestion.correctAnswer
                    ? "correct"
                    : ""
                }`}
              >
                {option}
              </span>
            </label>
          );
        })}

        <div className="pagination-container">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            السابق
          </button>

          <span className="page-indicator">
            الصفحة {currentPage} من {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseQuiz;


