'use client'

import React, { useState, useRef, useEffect } from 'react';
import CourseCard from './CourseCard';
import courses from '../../data/CoursesAfaq';
import '../../assets/styles/TeacherCoursesCarousel.css';

interface TeacherCoursesCarouselProps {
  teacherName: string;
}

const TeacherCoursesCarousel: React.FC<TeacherCoursesCarouselProps> = ({ teacherName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Filter courses by the current teacher
  const teacherCourses = courses.filter(course => course.instructor === teacherName);
  
  // Calculate how many cards can fit based on screen size
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 4;
    const width = window.innerWidth;
    
    // Responsive breakpoints matching CSS
    if (width <= 390) return 1;  // Extra small mobile
    if (width <= 480) return 1;  // Mobile
    if (width <= 690) return 2;  // Small tablet
    if (width <= 768) return 2;  // Tablet
    if (width <= 1040) return 2; // Medium screens
    if (width <= 1199) return 3; // Large tablet
    if (width <= 1420) return 3; // Large screens
    return 4; // Desktop (>1420px)
  };

  const [visibleCards, setVisibleCards] = useState(4);
  
  useEffect(() => {
    setIsClient(true);
    
    // Set initial visible cards
    setVisibleCards(getVisibleCards());
    
    // Handle window resize
    const handleResize = () => {
      const newVisibleCards = getVisibleCards();
      setVisibleCards(newVisibleCards);
      
      // Reset currentIndex if it's out of bounds
      setCurrentIndex(prev => {
        const maxIndex = Math.max(0, teacherCourses.length - newVisibleCards);
        return Math.min(prev, maxIndex);
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [teacherCourses.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, teacherCourses.length - visibleCards);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, teacherCourses.length - visibleCards);
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  // Calculate responsive card width and gap based on actual CSS breakpoints
  const getCardDimensions = () => {
    if (typeof window === "undefined") return { cardWidth: 262, gap: 24 };
    const width = window.innerWidth;
    
    if (width <= 480) {
      return { cardWidth: 240, gap: 8 }; // 0.5rem = 8px
    }
    if (width <= 690) {
      return { cardWidth: 262, gap: 16 }; // 1rem = 16px  
    }
    return { cardWidth: 262, gap: 24 }; // 1.5rem = 24px (default)
  };

  const handleCourseClick = (courseId: number) => {
    console.log('Navigate to course:', courseId);
  };

  // Calculate responsive transform value
  const { cardWidth, gap } = getCardDimensions();
  const transformValue = currentIndex * (cardWidth + gap);

  // If no courses found for this teacher, show message
  if (teacherCourses.length === 0) {
    return (
      <section className="teacher-courses-section">
        <div className="teacher-courses-container">
          <div className="teacher-courses-header">
            <h2 className="teacher-courses-title">دورات {teacherName}</h2>
          </div>
          <p className="teacher-no-courses-message">لا توجد دورات متاحة لهذا المعلم حالياً</p>
        </div>
      </section>
    );
  }

  return (
    <section className="teacher-courses-section">
      <div className="teacher-courses-container">
        <div className="teacher-courses-header">
          <h2 className="teacher-courses-title">دورات {teacherName}</h2>
        </div>
        
        <div className="teacher-courses-carousel">
          {/* Right Arrow Button */}
          <button 
            className="teacher-carousel-arrow teacher-carousel-arrow-right"
            onClick={prevSlide}
            aria-label="Previous courses"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="teacher-courses-grid-container" ref={carouselRef}>
            <div 
              className="teacher-courses-grid"
              style={{
                transform: `translateX(${transformValue}px)`,
                transition: 'transform 0.3s ease',
                display: 'flex',
                gap: '24px',
                width: `${teacherCourses.length * (262 + 24) - 24}px`
              }}
            >
              {teacherCourses.map((course) => (
                <div key={course.id} className="teacher-course-card">
                  <CourseCard
                    title={course.title}
                    instructor={course.instructor}
                    subject={course.subject}
                    chapters={course.chapters}
                    price={course.price}
                    thumbnail={course.thumbnail}
                    onEnroll={() => handleCourseClick(course.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Left Arrow Button */}
          <button 
            className="teacher-carousel-arrow teacher-carousel-arrow-left"
            onClick={nextSlide}
            aria-label="Next courses"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeacherCoursesCarousel;