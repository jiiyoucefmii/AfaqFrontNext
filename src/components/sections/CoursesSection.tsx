import React, { useState, useRef } from 'react';
import Image from 'next/image';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';

interface Course {
  id: number;
  image: any;
  name: string;
  instructor: string;
}

const CoursesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const courses: Course[] = [
    {
      id: 1,
      image: pic1,
      name: 'دورة الكيمياء المراجعة النهائية',
      instructor: 'الأستاذ بريك أسامة'
    },
    {
      id: 2,
      image: pic2,
      name: 'دورة الفيزياء المتقدمة',
      instructor: 'الأستاذ أحمد محمد'
    },
    {
      id: 3,
      image: pic3,
      name: 'دورة الرياضيات التطبيقية',
      instructor: 'الأستاذة فاطمة علي'
    },
    {
      id: 4,
      image: pic4,
      name: 'دورة اللغة العربية',
      instructor: 'الأستاذ محمد حسن'
    },
    {
      id: 5,
      image: pic1,
      name: 'دورة الأحياء المتقدمة',
      instructor: 'الأستاذة سارة أحمد'
    },
    {
      id: 6,
      image: pic2,
      name: 'دورة التاريخ الإسلامي',
      instructor: 'الأستاذ عمر محمود'
    }
  ];

  // Get number of visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 4;
      if (window.innerWidth >= 769) return 3;
      if (window.innerWidth >= 481) return 2;
      return 1;
    }
    return 4; // Default for SSR
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visible cards on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, courses.length - visibleCards);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleSeeMore = () => {
    // Navigate to courses page or show more courses
    console.log('Navigate to courses page');
  };

  return (
    <section className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <h2 className="courses-title">الدورات المتاحة</h2>
        </div>
        
        <div className="courses-carousel">
          <button 
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous courses"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="courses-grid-container" ref={carouselRef}>
            <div 
              className="courses-grid"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(courses.length / visibleCards) * 100}%`
              }}
            >
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <Image src={course.image} alt={course.name} className="course-img" />
                  </div>
                  <div className="course-content">
                    <h3 className="course-name">{course.name}</h3>
                    <p className="course-instructor">{course.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next courses"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="courses-bottom">
          <button className="see-more-btn" onClick={handleSeeMore}>
            عرض المزيد
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;