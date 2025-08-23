'use client';
import React from 'react';
import '../../assets/styles/FilterCoursesAfaqP.css';
import RangeSlider from './RangeSlider';

interface FilterProps {
  filters: {
    subject: string;
    level: string;
    duration: string;
    price: [number, number];
  };
  onFilterChange: (name: string, value: any) => void;
}

const PLUS_MODULES: string[] = [
"Web Development",
  "Mobile App Dev",
  "3D Design",
  "Artificial Intelligence",
  "Data Analysis",
  "Graphic Design",
  "Cybersecurity",
];

const FilterCoursesAfaqP: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className='filter-courses'>
      <form className="dropdown-form">
        <div className="dropdown-group sele-big">
          <label htmlFor="course1"> المجال :</label>
          <select 
            id="course1" 
            name="course1" 
            value={filters.subject} 
            onChange={(e) => onFilterChange('subject', e.target.value)}
          >
            <option value="">الكل</option>
            {PLUS_MODULES.map((mod, idx) => (
              <option key={idx} value={mod}>
                {mod}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="course2">المستوى :</label>
          <select 
            id="course2" 
            name="course2" 
            value={filters.level} 
            onChange={(e) => onFilterChange('level', e.target.value)}
          >
            <option value="">الكل</option>
            <option value="beginner">مبتدئ</option>
            <option value="intermediate">متوسط</option>
            <option value="advanced">متقدم</option>
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="course3">مدة الدورة :</label>
          <select 
            id="course3" 
            name="course3" 
            value={filters.duration} 
            onChange={(e) => onFilterChange('duration', e.target.value)}
          >
            <option value="">الكل</option>
            <option value="short">قصيرة</option>
            <option value="medium">متوسطة</option>
            <option value="long">طويلة</option>
          </select>
        </div>

        <div className="slider-range">
          <label htmlFor="level">السعر :</label>
          <RangeSlider 
            value={filters.price} 
            onChange={(value: [number, number]) => onFilterChange('price', value)} 
          />
        </div>
      </form>
    </div>
  );
};

export default FilterCoursesAfaqP;
