"use client";

import React, { useState } from "react";
import "../../assets/styles/AfaqPlusCourses.css";
import CoursesAfaqP from "../../data/CoursesAfaqP";
import Image from "next/image";
import Pagination from "./Pagination";

// Icons
import starOutlined from "../../assets/images/Star.svg";
import starFilled from "../../assets/images/Star-colored.svg";
import tableOfContent from "../../assets/images/Table of Content.svg";
import dollarIcon from "../../assets/images/Us Dollar Circled.svg";
import playIcon from "../../assets/images/Circled Play Button.svg";

const AfaqPlusCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(CoursesAfaqP.length / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedCourses = CoursesAfaqP.slice(indexStart, indexStart + itemsPerPage);

  const [likedCourses, setLikedCourses] = useState([]);

  const toggleLike = (id) => {
    setLikedCourses((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="afaqpluscourses">
      <div className="courses">
        {displayedCourses.map((course) => (
          <div className="one-card" key={course.id}>
            <div className="image-wraper">
                            <img src={course.image} alt="course" className="original-img" />
                            <button
                                onClick={() => {
                                    setLikedCourses(prev =>
                                        prev.includes(course.id)
                                            ? prev.filter(id => id !== course.id)
                                            : [...prev, course.id]
                                    );
                                }}
                                className="like-button" >
                                <img
                                    src={likedCourses.includes(course.id) ? starFilled : starOutlined}
                                    alt="like"
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
              <p>{course.price}</p>
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
