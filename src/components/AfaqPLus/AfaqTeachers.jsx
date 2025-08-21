import React, { useState } from 'react';
import '../../assets/styles/AfaqTeachers.css';
import Teachers from '../../data/TeachersAfaq';
import Pagination from './Pagination';

const AfaqTeachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(Teachers.length / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedTeachers = Teachers.slice(indexStart, indexStart + itemsPerPage);

  return (
    <div className="afaq-teachers">
      <div className="all-teachers">
        {displayedTeachers.map((teacher) => (
          <div className="one-card" key={teacher.id}>
            <img src={teacher.image} alt="teacher" />
            <div className="white-bottom">
              <p className="teacher-name">{teacher.name}</p>
              <p className="module">{teacher.module}</p>
              <button className="teacher-info">حول الأستاذ</button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AfaqTeachers;
