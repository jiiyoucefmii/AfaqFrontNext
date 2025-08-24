"use client";

import React, { useState } from 'react';
import '../../assets/styles/Teachers.css';
import FilterTeachers from '../../components/AfaqPLus/FilterTeachers';
import AfaqTeachers from '../../components/AfaqPLus/AfaqTeachers';
import AfaqPlusTeachers from '../../components/AfaqPLus/AfaqPlusTeachers';

const Teachers: React.FC = () => {
  const [schoolFilter, setSchoolFilter] = useState(""); // filter for afaq
  const [plusFilter, setPlusFilter] = useState("");     // filter for plus

  return (
    <div className='teachers'>
      <div className="first-text">
        <h2>نخبةٌ اساتذة الجزائر</h2>
        <p>الخبير في كل شيء كان مبتدئًا في يومٍ ما</p>
      </div>

      {/* School teachers */}
      <FilterTeachers onFilterChange={setSchoolFilter} />
      <AfaqTeachers filter={schoolFilter} />   

      {/* Afaq+ teachers */}
      <FilterTeachers type="plus" onFilterChange={setPlusFilter} />
      <AfaqPlusTeachers filter={plusFilter} /> 
    </div>
  );
};

export default Teachers;
