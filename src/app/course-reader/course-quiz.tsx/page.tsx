"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "../../../assets/styles/StQuiz.css";
import Pagination from "../../../components/AfaqPLus/Pagination";

import PicSt from "@/assets/images/teachers/teacher1.png";

const QuizInfo = () => {
  const students = Array.from({ length: 30 }, (_, i) => `Student ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const totalItems = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedQuizzes = Array.from(
    { length: itemsPerPage },
    (_, i) => indexStart + i + 1
  ).filter((id) => id <= totalItems);

  return (
    <div className="quizinfo">
      <div className="top1">
        <p className="big-quiz">Quizes</p>
        <div className="answers-info">
          <p className="correct-ans">الإجابات الصحيحة 7</p>
          <p className="wrong-ans">الإجابات الخاطئة 9</p>
        </div>
        
      </div>

      <hr className="hr-quiz" />

      <div className="question-quiz">
        <p>
          "لقد باتت اللغة العربية تواجه تحديات جسيمة في عصر الرقمنة والعولمة،
          حيث تتزاحم اللغات الأجنبية في كل زاوية من زوايا حياتنا اليومية، من التعليم
          إلى الإعلام وحتى مواقع التواصل الاجتماعي. ومع ذلك، تبقى اللغة العربية
          قادرة على التكيف، إذا ما وُجدت الإرادة الحقيقية لدعمها عبر المناهج الدراسية
          والتكنولوجيا والتعليم الحديث."
          <br />
          السؤال: ما الفكرة الرئيسة التي يطرحها الكاتب في هذا المقطع؟
        </p>
      </div>

      <div className="quiz-answers">
        <div className="one-answer">
          <p className="num-ans">1</p>
          <p className="whole-ans">
            وسائل التواصل الاجتماعي ساعدت في تقوية اللغة العربية.
          </p>
        </div>

        <div className="one-answer">
          <p className="num-ans">2</p>
          <p className="whole-ans">
            وسائل التواصل الاجتماعي ساعدت في تقوية اللغة العربية.
          </p>
        </div>

        <div className="one-answer">
          <p className="num-ans">3</p>
          <p className="whole-ans">
            وسائل التواصل الاجتماعي ساعدت في تقوية اللغة العربية.
          </p>
        </div>

        <div className="one-answer">
          <p className="num-ans correct-ans2">4</p>
          <p className="whole-ans correct-ans1">
            وسائل التواصل الاجتماعي ساعدت في تقوية اللغة العربية.
          </p>
        </div>
      </div>


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default QuizInfo;
