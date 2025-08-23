"use client";

import { useState } from "react";
import Link from "next/link";
import "../../../assets/styles/QuizT.css";
import pluscircle from "../../../assets/images/Pluscircle.svg";
import Onequiz from "../../../components/ui/Onequiz";
import Pagination from "../../../components/AfaqPLus/Pagination";

export default function QuizT() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalItems = 50;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedQuizzes = Array.from({ length: itemsPerPage }, (_, i) => indexStart + i + 1)
    .filter((id) => id <= totalItems);

  return (
    <div className="quizt">
      <div className="top1">
        <p className="big-quiz">Quizes</p>
        <Link href="/profile-teacher/quiz-teacher/add-quiz" className="add-quiz">
          <img src={pluscircle.src} alt="Add" />
          <p>Add quiz</p>
        </Link>
      </div>

      <hr className="hr-quiz" />

      <div className="all-my-quizes">
        {displayedQuizzes.length > 0 ? (
          displayedQuizzes.map((quizId) => (
            <Link
              key={quizId}
              href="/profile-teacher/quiz-teacher/quiz-info"
              className="quiz-link"
            >
              <Onequiz
                name="الحركة المستقيمة المنتظمة والمتغيرة"
                numQst={12}
                numStudents={38}
                moy={11.8}
              />
            </Link>
          ))
        ) : (
          <p className="no-quizzes">لا توجد اختبارات</p>
        )}
      </div>

      {/* ✅ Show pagination only if more than one page */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
