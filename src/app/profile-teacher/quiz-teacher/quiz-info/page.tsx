"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "../../../../assets/styles/QuizInfo.css";
import OverviewImg from "../../../../components/icons/OverviewImg";
import PicSt from "@/assets/images/teachers/teacher1.png";

const QuizInfo = () => {
  // Example questions
  const questions = [
    {
      id: 1,
      question: `لقد باتت اللغة العربية تواجه تحديات جسيمة في عصر الرقمنة والعولمة، حيث تتزاحم اللغات الأجنبية في كل زاوية من زوايا حياتنا اليومية. السؤال: ما الفكرة الرئيسة التي يطرحها الكاتب؟`,
      options: [
        "وسائل التواصل الاجتماعي ساعدت في تقوية اللغة العربية.",
        "اللغات الأجنبية أصبحت أكثر أهمية من اللغة العربية.",
        "التكنولوجيا الحديثة تهدد وجود اللغة العربية.",
        "اللغة العربية تواجه تحديات لكنها قادرة على التكيف بالدعم المناسب."
      ],
      correctAnswer: "4",
      studentsAnswers: [
        { name: "Wail Kataloni", answer: "4" },
        { name: "Sara Benali", answer: "2" },
        { name: "Ali Hachem", answer: "4" }, { name: "Wail Kataloni", answer: "4" },
        { name: "Sara Benali", answer: "2" },
        { name: "Ali Hachem", answer: "4" }, { name: "Wail Kataloni", answer: "4" },
        { name: "Sara Benali", answer: "2" },
        { name: "Ali Hachem", answer: "4" }
      ]
    },
    {
      id: 2,
      question: "ما هي أقسام الكلمة في اللغة العربية؟",
      options: ["فعل، اسم، حرف", "مفرد، مثنى، جمع", "مذكر، مؤنث", "معرف، نكرة"],
      correctAnswer: "1",
      studentsAnswers: [
        { name: "Wail Kataloni", answer: "1" },
        { name: "Sara Benali", answer: "3" },
        { name: "Ali Hachem", answer: "1" }
      ]
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(questions.length / itemsPerPage);

  const currentIndex = currentPage - 1;
  const currentQuestion = questions[currentIndex];

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="quizinfo">
      <div className="top1">
        <p className="big-quiz">Question {currentQuestion.id}</p>
        <Link
          href="/profile-teacher/quiz-teacher/quiz-info/quiz-overview"
          className="add-quiz"
        >
          <OverviewImg color={"#FFC800"} />
          <p>إحصائيات</p>
        </Link>
      </div>

      <hr className="hr-quiz" />

      <div className="question-quiz">
        <p>{currentQuestion.question}</p>
      </div>

      <div className="quiz-answers">
        {currentQuestion.options.map((option, index) => {
          const optionNumber = (index + 1).toString();
          const isCorrect = optionNumber === currentQuestion.correctAnswer;

          return (
            <div
              key={index}
              className={`one-answer ${isCorrect ? "show-correct" : ""}`}
            >
              <span className="num-ans">{optionNumber}</span>
              <span className="whole-ans">{option}</span>
            </div>
          );
        })}
      </div>

      {/* Students answers */}
      <div className="students-answers">
        <p className="ss">الطلاب الذين أجابوا</p>
        <div className="students-list1">
        {currentQuestion.studentsAnswers.length === 0 ? (
          <p className="no-students">لا يوجد أي طالب قد أجاب بعد</p>
        ) : (
          currentQuestion.studentsAnswers.map((student, idx) => {
            const isCorrect = student.answer === currentQuestion.correctAnswer;
            return (
              <div key={idx} className="student-item1">
                <Image src={PicSt} alt="student" width={40} height={40} />
                <p className="name-st">{student.name}</p>
                <p className={`ans-st ${isCorrect ? "correct" : "incorrect"}`}>
                  {currentQuestion.options[Number(student.answer) - 1]}
                </p>
              </div>
            );
          })
        )}
      </div>
      </div>

      
      

      {/* Pagination */}
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
  );
};

export default QuizInfo;
