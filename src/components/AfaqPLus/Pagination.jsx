import React, { useState } from 'react';
import { useLocation  } from 'react-router-dom';
import '../../assets/styles/Pagination.css'


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPagination = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages).keys()].map((n) => n + 1);
    }
    if (currentPage <= 3) return [1, 2, 3, '...', totalPages];
    if (currentPage >= totalPages - 2) return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', currentPage, '...', totalPages];
  };

  
    const location = useLocation();
    const isTeachers = location.pathname === "/teachers";
    const isprofile = location.pathname.includes("/profile");

  return (
    <div className={`pagination 
        ${isTeachers || isprofile ? 'pagination-teachers' : ''} `}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {'<'}
      </button>

      {getPagination().map((page, index) => (
        <button
          key={index}
          className={page === currentPage ? 'active' : ''}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
