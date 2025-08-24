"use client"

import { useState } from "react"
import Image from "next/image"
import "../../../../../assets/styles/QuizOverview.css"
import PicSt from "../../../../../assets/images/teachers/teacher1.png"

export default function QuizOverview() {
  const [sortOrder, setSortOrder] = useState("asc")
  const [quizzes, setQuizzes] = useState([
    {
      name: "التحولات النووية والإشعاعات",
      questions: 20,
      maxMark: 20,
      avgMark: 15
    }
  ])

  const students = [
    { name: "Wail Kataloni", mark: 13, img: PicSt },
    { name: "Sara Benali", mark: 20, img: PicSt },
    { name: "Mohamed Ali", mark: 9, img: PicSt },
    { name: "Aya Rahmani", mark: 17, img: PicSt },
    { name: "Omar Bensaid", mark: 12, img: PicSt },
    { name: "Hiba Amrani", mark: 8, img: PicSt },
  ]

  const sortedStudents = [...students].sort((a, b) =>
    sortOrder === "asc" ? a.mark - b.mark : b.mark - a.mark
  )

  const handleDeleteQuiz = () => {
    if (confirm("هل أنت متأكد من حذف هذا الاختبار وكل محتوياته؟ ❌")) {
      setQuizzes([]) // remove all quizzes
    }
  }

  if (quizzes.length === 0) {
    return <p className="no-quiz">لا يوجد أي اختبار متاح</p>
  }

  return (
    <div className="quiz-overview">


      <table className="quiz-table">
        <thead>
          <tr>
            <th>اسم الاختبار</th>
            <th>عدد الأسئلة</th>
            <th>أعلى درجة</th>
            <th>متوسط الدرجة</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz, idx) => (
            <tr key={idx}>
              <td>{quiz.name}</td>
              <td>{quiz.questions}</td>
              <td>{quiz.maxMark}</td>
              <td>{quiz.avgMark}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="answ-st">الطلاب الذين أجابوا</p>

      <div className="std-marks">
        <div className="bombl">
          <form>
            <div className="dropdown-group4">
              <label htmlFor="sort">الترتيب :</label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">تصاعديا</option>
                <option value="desc">تنازليا</option>
              </select>
            </div>
          </form>
         
        </div>

        <div className="students-list1">
          {sortedStudents.length === 0 ? (
            <p className="no-students">لا يوجد أي طالب قد أجاب بعد</p>
          ) : (
            sortedStudents.map((student, index) => (
              <div key={index} className="student-item1">
                <Image
                  src={student.img}
                  alt={student.name}
                  width={50}
                  height={50}
                  className="studentImg"
                />
                <p className="name-st">{student.name}</p>
                <p className="mark-st">العلامة: {student.mark}</p>
              </div>
            ))
          )}
        </div>
      </div>

       <div className="delete-quiz-container">
            <button
              className="delete-quiz-btn"
              onClick={handleDeleteQuiz}
            >
              ❌ حذف الاختبار
            </button>
          </div>
    </div>
  )
}
