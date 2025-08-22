'use client'

import React from 'react'
import '../../assets/styles/Onequiz.css'

interface OnequizProps {
  name: string;
  numQst: number;
  numStudents: number;
  moy: number;
}

const Onequiz: React.FC<OnequizProps> = ({ name, numQst, numStudents, moy }) => {
  return (
    <div className='one-quiz'>
      <div className="name-course">{name}</div>
      <p className='infoo_Acourse'>{numQst} : عدد الأسئلة </p>
      <p className='infoo_Acourse'>{numStudents}  : الطلاب الذين أجابوا  </p>
      <p className='infoo_Acourse'>متوسط الدرجة: {moy}/20</p>
    </div>
  )
}

export default Onequiz
