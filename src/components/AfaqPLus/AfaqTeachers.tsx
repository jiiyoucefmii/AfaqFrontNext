"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "../../assets/styles/AfaqTeachers.css";
import Teachers from "../../data/TeachersAfaq";
import Pagination from "./Pagination";

interface Teacher {
  id: number;
  image: StaticImageData;
  name: string;
  module: string;
}

interface AfaqTeachersProps {
  filter?: string;
}

const AfaqTeachers: React.FC<AfaqTeachersProps> = ({ filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // appliquer le filtre
  const filteredTeachers = filter
    ? Teachers.filter((teacher) =>
        teacher.module.toLowerCase().includes(filter.toLowerCase())
      )
    : Teachers;
 {/*testing with folder teachers -- here where we need to load from db */}
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedTeachers = filteredTeachers.slice(
    indexStart,
    indexStart + itemsPerPage
  );

  return (
    <div className="afaq-teachers">
      {filteredTeachers.length === 0 ? (
        <p className="no-teachers">لا يوجد أساتذة</p>
      ) : (
        <>
          <div className="all-teachers">
            {displayedTeachers.map((teacher: Teacher) => (
              <div className="one-card" key={teacher.id}>
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  className="teacher-img"
                />
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
        </>
      )}
    </div>
  );
};

export default AfaqTeachers;
