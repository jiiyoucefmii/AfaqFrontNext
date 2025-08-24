"use client";

import React, { useState } from "react";
import "../../assets/styles/AfaqPlusCourses.css";
import CoursesAfaqP from "../../Data/CoursesAfaqPP";
import Image, { StaticImageData } from "next/image";
import Pagination from "./Pagination";
import FilterCoursesAfaqP from "./FilterCoursesAfaqP";
import SearchButton from "./SearchButton";

// Icons
import starOutlined from "../../assets/images/Star.svg";
import starFilled from "../../assets/images/Star-colored.svg";
import tableOfContent from "../../assets/images/Table of Content.svg";
import dollarIcon from "../../assets/images/Us Dollar Circled.svg";
import playIcon from "../../assets/images/Circled Play Button.svg";

// TypeScript type pour les cours
type Course = {
  id: number;
  image: string | StaticImageData;
  title: string;
  chapters: number;
  price: number;
  category: string;
  level: string;
  duration: string;
};

const AfaqPlusCourses: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [likedCourses, setLikedCourses] = useState<number[]>([]);
  
  const [filters, setFilters] = useState({
    subject: "",
    level: "",
    duration: "",
    price: [0, 10000] as [number, number],
  });

  // Filter handler
  const handleFilterChange = (name: string, value: any) => {
    setFilters(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1); // reset page on filter change
  };

  // Apply filters
  const filteredCourses = CoursesAfaqP.filter(course => {
    const matchCategory = filters.subject ? course.category === filters.subject : true;
    const matchLevel = filters.level ? course.level === filters.level : true;
    const matchDuration = filters.duration ? course.duration === filters.duration : true;
    const matchPrice = course.price >= filters.price[0] && course.price <= filters.price[1];
    return matchCategory && matchLevel && matchDuration && matchPrice;
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedCourses: Course[] = filteredCourses.slice(indexStart, indexStart + itemsPerPage);

  const toggleLike = (id: number) => {
    setLikedCourses(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="afaqpluscourses">
      <SearchButton />
      <FilterCoursesAfaqP filters={filters} onFilterChange={handleFilterChange} />
      <div className="courses">
        {displayedCourses.map(course => (
          <div className="one-card" key={course.id}>
            <div className="image-wrapper">
              <Image
                src={course.image}
                alt={course.title}
                className="original-img"
                width={300}
                height={200}
                priority
              />
              <button onClick={() => toggleLike(course.id)} className="like-button">
                <Image
                  src={likedCourses.includes(course.id) ? starFilled : starOutlined}
                  alt="like"
                  width={24}
                  height={24}
                  className="star-icon"
                />
              </button>
            </div>

            <div className="course-title">
              <p>{course.title}</p>
            </div>

            <div className="chapters">
              <Image src={tableOfContent} alt="chapters" width={20} height={20} />
              <p>{course.chapters} Chapters</p>
            </div>

            <div className="price">
              <Image src={dollarIcon} alt="price" width={20} height={20} />
              <p>{course.price} DA</p>
            </div>

            <div className="Play-now-btn-wrapper">
              <button className="Play-now-btn">
                <Image src={playIcon} alt="play" width={20} height={20} />
                <p>ابدأ الآن</p>
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

export default AfaqPlusCourses;
