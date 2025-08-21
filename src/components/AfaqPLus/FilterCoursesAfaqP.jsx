import React from 'react'
import '../../assets/styles/FilterCoursesAfaqP.css'
import RangeSlider from './RangeSlider'

const FilterCoursesAfaqP = () => {
  return (
    <div className='filter-courses'>
      <form class="dropdown-form">
            <div class="dropdown-group">
                <label for="course1"> المجال :</label>
                <select id="course1" name="course1">
                <option value="">الكل</option>
                <option value="math">الرياضيات</option>
                <option value="science">العلوم</option>
                <option value="history">التاريخ</option>
                </select>
            </div>

            <div class="dropdown-group">
                <label for="course2">المستوى :</label>
                <select id="course2" name="course2">
                <option value="">الكل</option>
                <option value="math">الرياضيات</option>
                <option value="science">العلوم</option>
                <option value="history">التاريخ</option>
                </select>
            </div>

            <div class="dropdown-group">
                <label for="course3">مدة الدورة :</label>
                <select id="course3" name="course3">
                <option value="">الكل</option>
                <option value="math">الرياضيات</option>
                <option value="science">العلوم</option>
                <option value="history">التاريخ</option>
                </select>
            </div>

            <div class="slider-range">
                <label for="level">السعر :</label>
                <RangeSlider/>
            </div>
        </form>
    </div>
  )
}

export default FilterCoursesAfaqP
