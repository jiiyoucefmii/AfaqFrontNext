"use client";

import React from 'react';
import Image from 'next/image';
import '../../assets/styles/FilterTeachers.css';

import logoAfaq from '../../assets/images/LogoFrameBlack.svg';
import logoAfaqPlus from '../../assets/images/Afaqplus_logoBlack.svg';

interface FilterTeachersProps {
  type?: 'plus' | 'normal';
}

const FilterTeachers: React.FC<FilterTeachersProps> = ({ type }) => {
  const selectedLogo = type === 'plus' ? logoAfaqPlus : logoAfaq;

  return (
    <div className='filter-teachers'>
      <form>
        <div className="dropdown-group1">
          <label htmlFor="course1">المادة :</label>
          <select id="course1" name="course1">
            <option value="">الكل</option>
            <option value="science">العلوم</option>
            <option value="history">التاريخ</option>
          </select>
        </div>
      </form>

      <div className="horizontal-line1"></div>
      <p>اساتذة</p>
      <div className="logo-wrapper">
        <Image
          src={selectedLogo}
          alt="logo"
          
          priority
        />
      </div>
    </div>
  );
};

export default FilterTeachers;
