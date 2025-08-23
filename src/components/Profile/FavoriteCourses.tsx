'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../../assets/styles/FavoriteCourses.css';

interface Course {
  id: number;
  image: string;
  title: string;
  instructor: string;
  originalPrice?: string;
  currentPrice: string;
  progress: number;
  rating: number;
  studentsCount: number;
}

interface FavoriteCoursesProps {
  courses: Course[];
}

const FavoriteCourses: React.FC<FavoriteCoursesProps> = ({ courses }) => {
  const [likedCourses, setLikedCourses] = useState<number[]>([]);

  const toggleLike = (courseId: number) => {
    setLikedCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  return (
    <div className="favorite-courses-section">
      <div className="courses-header">
        <h2 className="courses-title">الدورات المفضلة</h2>
        <p className="courses-subtitle">هنا تجد كل ما نال إعجابك من دورات تعليمية</p>
        <hr className="courses-divider" />
      </div>
      
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="card-image-container">
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="course-image"
                priority
              />
              <button
                className={`like-button ${likedCourses.includes(course.id) ? 'liked' : ''}`}
                onClick={() => toggleLike(course.id)}
              >
                ⭐
              </button>
              
              <div className="course-badge">
                {course.title}
              </div>
            </div>

            <div className="course-progress">
              نسبة التقدم العامة {course.progress} %
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCourses;