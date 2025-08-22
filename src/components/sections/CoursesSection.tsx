import React, { useState, useRef, useEffect } from 'react';
import CourseCarouselCard from '../ui/CourseCarouselCard';

interface Course {
  id: number;
  image: string;
  name: string;
  instructor: string;
}

const CoursesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const courses: Course[] = [
    {
      id: 1,
      image: '/images/pic1.png',
      name: 'دورة الكيمياء المراجعة النهائية',
      instructor: 'الأستاذ بريك أسامة'
    },
    {
      id: 2,
      image: '/images/pic2.png',
      name: 'دورة الفيزياء المتقدمة',
      instructor: 'الأستاذ أحمد محمد'
    },
    {
      id: 3,
      image: '/images/pic3.png',
      name: 'دورة الرياضيات التطبيقية',
      instructor: 'الأستاذة فاطمة علي'
    },
    {
      id: 4,
      image: '/images/pic4.png',
      name: 'دورة اللغة العربية',
      instructor: 'الأستاذ محمد حسن'
    },
      {
      id: 5,
      image: '/images/pic1.png',
      name: 'دورة الأحياء المتقدمة',
      instructor: 'الأستاذة سارة أحمد'
    },
    {
      id: 6,
      image: '/images/pic2.png',
      name: 'دورة التاريخ الإسلامي',
      instructor: 'الأستاذ عمر محمود'
    }
  ];

  // Calculate how many cards can fit based on screen size
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 4;
    const containerWidth = window.innerWidth - 32; // Account for padding
    const cardWidth = 262;
    const gap = 24;
    const maxCards = Math.floor((containerWidth + gap) / (cardWidth + gap));
    return Math.min(maxCards, 4); // Max 4 cards as requested
  };

  const [visibleCards, setVisibleCards] = useState(4);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Exact navigation mechanism from your CourseCarousel
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + visibleCards >= courses.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, courses.length - visibleCards) : prev - 1));
  };

  const handleSeeMore = () => {
    console.log('Navigate to courses page');
  };

  const handleCourseClick = (courseId: number) => {
    console.log('Navigate to course:', courseId);
  };

  // Calculate transform value
  const transformValue = currentIndex * (262 + 24);

  return (
    <section className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <h2 className="courses-title">الدورات المتاحة</h2>
        </div>
        
        <div className="courses-carousel">
          {/* Right Arrow Button */}
          <button 
            className="carousel-arrow carousel-arrow-right"
            onClick={prevSlide}
            aria-label="Previous courses"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="courses-grid-container" ref={carouselRef}>
            <div 
              className="courses-grid"
              style={{
                transform: `translateX(${transformValue}px)`,
                transition: 'transform 0.3s ease',
                display: 'flex',
                gap: '24px',
                width: `${courses.length * (262 + 24) - 24}px`
              }}
            >
              {courses.map((course) => (
                <CourseCarouselCard
                  key={course.id}
                  id={course.id}
                  image={course.image}
                  name={course.name}
                  instructor={course.instructor}
                  onClick={() => handleCourseClick(course.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Left Arrow Button */}
          <button 
            className="carousel-arrow carousel-arrow-left"
            onClick={nextSlide}
            aria-label="Next courses"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="courses-bottom">
          <button className="see-more-btn" onClick={handleSeeMore}>
            عرض المزيد
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;