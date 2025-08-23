"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "../../assets/styles/AfaqPlusTeachers.css";
import Teachers from "../../data/TeachersPlus";
import Pagination from "./Pagination";

interface Teacher {
  id: number;
  image: StaticImageData; // imported image type
  name: string;
  module: string;
}


const AfaqPlusTeachers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(Teachers.length / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedTeachers = Teachers.slice(indexStart, indexStart + itemsPerPage);

  return (
    <div className="afaqP-teachers">
      <div className="all-teachersP">
        {displayedTeachers.map((teacher: Teacher) => (
          <div className="one-card-P" key={teacher.id}>
            <div className="img-wrapper">
              <Image
                src={teacher.image}
                alt={teacher.name}
                className="main-img"
                
                priority
              />
            </div>
            <div className="module-P">{teacher.module}</div>
            <div className="gradient-rec"></div>
            <div className="info-name">
              <p className="teacher-name-P">{teacher.name}</p>
              <button className="teacher-info-P">حول الأستاذ</button>
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

export default AfaqPlusTeachers;
