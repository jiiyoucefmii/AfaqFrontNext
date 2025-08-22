"use client";
import React from 'react';
import '../../assets/styles/FilterCoursesAfaqP.css';
import RangeSlider from './RangeSlider';

const FilterCoursesAfaqP = () => {
  return (
    <div className='filter-courses'>
      <form className="dropdown-form">
        <div className="dropdown-group">
          <label htmlFor="course1"> المجال :</label>
          <select id="course1" name="course1">
            <option value="">الكل</option>
            <option value="math">الرياضيات</option>
            <option value="science">العلوم</option>
            <option value="history">التاريخ</option>
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="course2">المستوى :</label>
          <select id="course2" name="course2">
            <option value="">الكل</option>
            <option value="beginner">مبتدئ</option>
            <option value="intermediate">متوسط</option>
            <option value="advanced">متقدم</option>
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="course3">مدة الدورة :</label>
          <select id="course3" name="course3">
            <option value="">الكل</option>
            <option value="short">قصيرة</option>
            <option value="medium">متوسطة</option>
            <option value="long">طويلة</option>
          </select>
        </div>

        <div className="slider-range">
          <label htmlFor="level">السعر :</label>
          <RangeSlider />
        </div>
      </form>
    </div>
  );
};

export default FilterCoursesAfaqP;
