import React from 'react'
import '../../assets/styles/FilterTeachers.css'

import logoAfaq from '../../assets/images/LogoFrameBlack.svg'
import logoAfaqPlus from '../../assets/images/afaqplus_logoBlack.svg'

const FilterTeachers = ({ type }) => {
  const selectedLogo = type === 'plus' ? logoAfaqPlus : logoAfaq;
  const isAfaqPlus = type === 'plus';

  return (
    <div className='filter-teachers'>
      <form >
        <div class="dropdown-group1">
          <label for="course1"> المادة :</label>
          <select id="course1" name="course1">
            <option value="">الكل</option>
            <option value="science">العلوم</option>
            <option value="history">التاريخ</option>
          </select>
        </div>
      </form>
      <div className="horizontal-line1"></div>
        <p>اساتذة</p>
        <img src={selectedLogo} alt="" />
    </div>
  )
}

export default FilterTeachers
