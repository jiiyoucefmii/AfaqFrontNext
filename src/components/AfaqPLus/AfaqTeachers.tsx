"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import "../../assets/styles/AfaqTeachers.css";
import Teachers from "../../data/TeachersAfaq";
import Pagination from "./Pagination";

interface Teacher {
  id: number;
  image: StaticImageData;
  name: string;
  module: string;
}

const AfaqTeachers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const itemsPerPage = 8;
  const totalPages = Math.ceil(Teachers.length / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedTeachers = Teachers.slice(indexStart, indexStart + itemsPerPage);

  const handleTeacherClick = (teacherId: number) => {
    router.push(`/teachers/${teacherId}`);
  };

  return (
    <div className="afaq-teachers">
      <div className="all-teachers">
        {displayedTeachers.map((teacher: Teacher) => (
          <div className="one-card" key={teacher.id}>
            <div className="teacher-img-wrapper">
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="white-bottom">
              <p className="teacher-name">{teacher.name}</p>
              <p className="module">{teacher.module}</p>
              <button 
                className="teacher-info"
                onClick={() => handleTeacherClick(teacher.id)}
              >
                حول الأستاذ
              </button>
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
