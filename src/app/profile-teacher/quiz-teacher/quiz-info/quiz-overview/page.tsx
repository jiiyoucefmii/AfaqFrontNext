"use client"

import { useState } from "react"
import Image from "next/image"
import "../../../../../assets/styles/QuizOverview.css"

// Import student images
import PicSt from "../../../../../assets/images/teachers/teacher1.png"

export default function QuizOverview() {
  const [sortOrder, setSortOrder] = useState("asc")

  // Students data with images
  const students = [
    { name: "Wail Kataloni", mark: 13, img: PicSt },
    { name: "Sara Benali", mark: 20, img: PicSt },
    { name: "Mohamed Ali", mark: 9, img: PicSt },
    { name: "Aya Rahmani", mark: 17, img: PicSt },
    { name: "Omar Bensaid", mark: 12, img: PicSt },
    { name: "Hiba Amrani", mark: 8, img: PicSt },
  ]

  // Sorting logic
  const sortedStudents = [...students].sort((a, b) =>
    sortOrder === "asc" ? a.mark - b.mark : b.mark - a.mark
  )

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
          <tr>
            <td>التحولات النووية والإشعاعات</td>
            <td>20</td>
            <td>20</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>

      <p className="answ-st">الطلاب الذين أجابوا</p>

      <div className="std-marks">
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
    </div>
  )
}
