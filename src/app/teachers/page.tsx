"use client";

import React from 'react';
import '../../assets/styles/Teachers.css';
import FilterTeachers from '../..//components/AfaqPLus/FilterTeachers';
import AfaqTeachers from '../../components/AfaqPLus/AfaqTeachers';
import AfaqPlusTeachers from '../../components/AfaqPLus/AfaqPlusTeachers';

const Teachers: React.FC = () => {
  return (
    <div className='teachers'>
      <div className="first-text">
        <h2>نخبةٌ اساتذة الجزائر</h2>
        <p>الخبير في كل شيء كان مبتدئًا في يومٍ ما</p>
      </div>
      <FilterTeachers />
      <AfaqTeachers />

      <FilterTeachers type="plus" />
      <AfaqPlusTeachers />
    </div>
  );
};

export default Teachers;
