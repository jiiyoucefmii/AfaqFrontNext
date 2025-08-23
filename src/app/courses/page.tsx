'use client'

import React, { useState } from 'react';
import CourseCard from '../../components/ui/CourseCard';
import '../../assets/styles/Courses.css';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import rightImage from '../../assets/images/RightImage.png';
import midImage from '../../assets/images/MidImage.png';
import leftImage from '../../assets/images/LeftImage.png';

// Simple SVG Icons as components
const SearchIcon = () => (
  <svg className="courses-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
    
  <div className={`courses-dropdown-arrow ${className}`}></div>
);

const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg className={`courses-star-icon ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

interface Course {
  id: number;
  title: string;
  instructor: string;
  subject: string;
  chapters: number;
  price: string;
  thumbnail: any;
  level: 'bem' | 'secondary' | 'university'; // Add level attribute
}

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;
  
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState<'bem' | 'secondary' | 'university'>('secondary');
  
  // Add subject filter state
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  
  // Add level filter state
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  // Add price range slider state
  const [priceValue, setPriceValue] = useState<number>(2500);
  const priceMin = 0;
  const priceMax = 10000;

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(Number(event.target.value));
  };

  // Add subject change handler
  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(event.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };
  
  // Add level change handler
  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.target.value);
    // Reset category filter when level dropdown is used
    if (event.target.value !== '') {
      setSelectedCategory('secondary'); // Reset to default
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Calculate the percentage filled for slider background
  const getSliderBackgroundSize = () => {
    const percent = ((priceValue - priceMin) / (priceMax - priceMin)) * 100;
    return {
      background: `linear-gradient(to left, var(--afaq-yellow) ${percent}%,rgb(222, 222, 222) ${percent}%)`
    };
  };

  // Expanded course data for testing pagination - 168 courses for 21 pages
  const courses: Course[] = [
    {
      id: 1,
      title: "دورة المراجعة النهائية رياضيات",
      instructor: "الاستاذ بريك اسامة",
      subject: "رياضيات",
      chapters: 10,
      price: "2500 DA",
      thumbnail: pic1,
      level: 'secondary',
    },
    {
      id: 2,
      title: "دورة الفيزياء النهائية",
      instructor: "الاستاذ محمد علي",
      subject: "فيزياء",
      chapters: 12,
      price: "3000 DA",
      thumbnail: pic2,
      level: 'secondary',
    },
    {
      id: 3,
      title: "دورة الكيمياء الأساسية",
      instructor: "الاستاذ أحمد",
      subject: "كيمياء",
      chapters: 12,
      price: "2200 DA",
      thumbnail: pic3,
      level: 'bem',
    },
    {
      id: 4,
      title: "دورة التاريخ الحديث",
      instructor: "الاستاذة فاطمة",
      subject: "تاريخ",
      chapters: 9,
      price: "1800 DA",
      thumbnail: pic4,
      level: 'bem',
    },
    {
      id: 5,
      title: "دورة اللغة الإنجليزية",
      instructor: "الاستاذ محمد",
      subject: "إنجليزية",
      chapters: 15,
      price: "1500 DA",
      thumbnail: pic1,
      level: 'secondary',
    },
    {
      id: 6,
      title: "دورة البرمجة الأساسية",
      instructor: "الدكتور علي",
      subject: "برمجة",
      chapters: 10,
      price: "3000 DA",
      thumbnail: pic2,
      level: 'secondary',
    },
    {
      id: 7,
      title: "دورة الرياضيات المتقدمة",
      instructor: "الاستاذة نور",
      subject: "رياضيات",
      chapters: 11,
      price: "2600 DA",
      thumbnail: pic3,
      level: 'secondary',
    },
    {
      id: 8,
      title: "دورة العلوم الطبيعية",
      instructor: "الاستاذ خالد",
      subject: "علوم",
      chapters: 13,
      price: "2400 DA",
      thumbnail: pic4,
      level: 'secondary',
    },
    // Additional courses for testing pagination
    {
      id: 9,
      title: "دورة الجغرافيا الحديثة",
      instructor: "الاستاذ سامي",
      subject: "جغرافيا",
      chapters: 8,
      price: "2000 DA",
      thumbnail: pic1,
      level: 'secondary',
    },
    {
      id: 10,
      title: "دورة الأدب العربي",
      instructor: "الاستاذة ليلى",
      subject: "أدب",
      chapters: 14,
      price: "1700 DA",
      thumbnail: pic2,
      level: 'secondary',
    },
    {
      id: 11,
      title: "دورة الفلسفة الحديثة",
      instructor: "الدكتور حسام",
      subject: "فلسفة",
      chapters: 10,
      price: "2300 DA",
      thumbnail: pic3,
      level: 'secondary',
    },
    {
      id: 12,
      title: "دورة علم النفس",
      instructor: "الاستاذة مريم",
      subject: "علم نفس",
      chapters: 12,
      price: "2800 DA",
      thumbnail: pic4,
      level: 'secondary',
    },
    {
      id: 13,
      title: "دورة الاقتصاد الأساسي",
      instructor: "الاستاذ يوسف",
      subject: "اقتصاد",
      chapters: 9,
      price: "2100 DA",
      thumbnail: pic1,
      level: 'secondary',
    },
    {
      id: 14,
      title: "دورة علوم الحاسوب",
      instructor: "الدكتور أمين",
      subject: "حاسوب",
      chapters: 16,
      price: "3500 DA",
      thumbnail: pic2,
      level: 'secondary',
    },
    {
      id: 15,
      title: "دورة الإحصاء والاحتمالات",
      instructor: "الاستاذة سارة",
      subject: "إحصاء",
      chapters: 11,
      price: "2700 DA",
      thumbnail: pic3,
      level: 'bem',
    },
    {
      id: 16,
      title: "دورة التصميم الجرافيكي",
      instructor: "الاستاذ رامي",
      subject: "تصميم",
      chapters: 13,
      price: "3200 DA",
      thumbnail: pic4,
      level: 'secondary',
    },
    {
      id: 17,
      title: "دورة التسويق الرقمي",
      instructor: "الاستاذة هند",
      subject: "تسويق",
      chapters: 10,
      price: "2900 DA",
      thumbnail: pic1,
      level: 'secondary',
    },
    {
      id: 18,
      title: "دورة إدارة الأعمال",
      instructor: "الدكتور عمر",
      subject: "إدارة",
      chapters: 15,
      price: "3300 DA",
      thumbnail: pic2,
      level: 'secondary',
    },
    {
      id: 19,
      title: "دورة المحاسبة المالية",
      instructor: "الاستاذ طارق",
      subject: "محاسبة",
      chapters: 12,
      price: "2600 DA",
      thumbnail: pic3,
      level: 'secondary',
    },
    {
      id: 20,
      title: "دورة القانون التجاري",
      instructor: "الاستاذة نادية",
      subject: "قانون",
      chapters: 11,
      price: "2400 DA",
      thumbnail: pic4,
      level: 'secondary',
    },
    // Additional 148 courses for pagination testing
    {
      id: 21,
      title: "دورة الهندسة المدنية",
      instructor: "المهندس أحمد",
      subject: "هندسة",
      chapters: 14,
      price: "3800 DA",
      thumbnail: pic1,
      level: 'university',
    },
    {
      id: 22,
      title: "دورة الطب العام",
      instructor: "الدكتور محمد",
      subject: "طب",
      chapters: 20,
      price: "4500 DA",
      thumbnail: pic2,
      level: 'university',
    },
    {
      id: 23,
      title: "دورة الصيدلة الإكلينيكية",
      instructor: "الدكتورة فاطمة",
      subject: "صيدلة",
      chapters: 18,
      price: "4200 DA",
      thumbnail: pic3,
      level: 'secondary',
    },
    {
      id: 24,
      title: "دورة طب الأسنان",
      instructor: "الدكتور علي",
      subject: "أسنان",
      chapters: 16,
      price: "4000 DA",
      thumbnail: pic4,
      level: 'secondary',
    },
    {
      id: 25,
      title: "دورة الهندسة الكهربائية",
      instructor: "المهندس سامي",
      subject: "كهرباء",
      chapters: 15,
      price: "3600 DA",
      thumbnail: pic1,
      level: 'secondary',
    },
  
    
    // Add courses up to id: 168 to reach exactly 21 pages
    {
      id: 168,
      title: "دورة التربية البدنية والرياضة",
      instructor: "الكابتن خالد",
      subject: "رياضة",
      chapters: 12,
      price: "2200 DA",
      thumbnail: pic4,
      level: 'secondary',
    },
  ];
  // Filter courses based on selected category and search term
const filteredCourses = courses.filter(course => {
  // Use either category buttons OR level dropdown, not both
  const matchesCategory = selectedLevel === '' ? 
    course.level === selectedCategory : 
    course.level === selectedLevel;
  
  const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       course.subject.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesSubject = selectedSubject === '' || course.subject === selectedSubject;
  
  // Add price filtering - extract numeric value from price string
  const coursePrice = parseInt(course.price.replace(/[^0-9]/g, ''));
  const matchesPrice = coursePrice <= priceValue;
  
  return matchesCategory && matchesSearch && matchesSubject && matchesPrice;
});

// Update pagination calculations to use filtered courses
const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
const startIndex = (currentPage - 1) * coursesPerPage;
const endIndex = startIndex + coursesPerPage;
const currentCourses = filteredCourses.slice(startIndex, endIndex);

// Reset to page 1 when category changes
const handleCategoryChange = (category: 'bem' | 'secondary' | 'university') => {
  setSelectedCategory(category);
  // Reset level dropdown when category buttons are used
  setSelectedLevel('');
  setCurrentPage(1);
};

// Remove the duplicate pagination logic below (lines 341-345)
// DELETE THESE LINES:
// const totalPages = Math.ceil(courses.length / coursesPerPage);
// const startIndex = (currentPage - 1) * coursesPerPage;
// const endIndex = startIndex + coursesPerPage;
// const currentCourses = courses.slice(startIndex, endIndex);

const handlePageChange = (page: number) => {
  setCurrentPage(page);
  // Scroll to top of courses section
  document.querySelector('.courses-section')?.scrollIntoView({ behavior: 'smooth' });
};

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="courses-container">
      {/* Hero Section */}
      <section className="courses-hero-section">
        <div className="courses-hero-content">
          <h1 className="courses-hero-title">
            انطلق في رحلة تعلمك مع دوراتنا المميزة
          </h1>
          
          <div className="courses-search-container">
            <div className="courses-search-bar">
              <SearchIcon />
              <input 
                type="text"
                placeholder="Search"
                className="courses-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Responsive Line */}
          <div className="courses-divider-line"></div>
          {/* Filters */}
          <div className="courses-filters-container">
            <form className="courses-dropdown-form">
              <div className="courses-dropdown-group">
                <label htmlFor="course1">المجال :</label>
                <select 
                  id="course1" 
                  name="course1"
                  value={selectedSubject}
                  onChange={handleSubjectChange}
                >
                  <option value="">الكل</option>
                  <option value="رياضيات">الرياضيات</option>
                  <option value="فيزياء">الفيزياء</option>
                  <option value="تاريخ">التاريخ</option>
                  <option value="جغرافيا">الجغرافيا</option>
                  <option value="فلسفة">الفلسفة</option>
                  <option value="لغة عربية">اللغة العربية</option>
                 
                </select>
              </div>

              <div className="courses-dropdown-group">
                <label htmlFor="course2">المستوى :</label>
                <select 
                  id="course2" 
                  name="course2"
                  value={selectedLevel}
                  onChange={handleLevelChange}
                  style={{ opacity: selectedLevel === '' ? 0.7 : 1 }}
                >
                  <option value="">الكل</option>
                  <option value="bem">BEM</option>
                  <option value="secondary">ثانوي</option>
                  <option value="university">جامعي</option>
                </select>
              </div>

              <div className="courses-dropdown-group">
                <label htmlFor="course3">السنة :</label>
                <select id="course3" name="course3">
                  <option value="">الكل</option>
                  <option value="short">قصيرة</option>
                  <option value="medium">متوسطة</option>
                  <option value="long">طويلة</option>
                </select>
              </div>

              <div className="courses-slider-range">
                <label htmlFor="priceRange">السعر :</label>
                <div className="courses-slider">
                  <input
                    className="courses-input-slider"
                    type="range"
                    id="priceRange"
                    min={priceMin}
                    max={priceMax}
                    value={priceValue}
                    onChange={handlePriceChange}
                    style={getSliderBackgroundSize()}
                  />
                  <p>{priceValue} DA</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="courses-categories-section">
        <div className="courses-categories-content">
          <div className="courses-categories-grid">
            {/* BEM Category */}
            <div 
              className={`courses-category-card ${
                selectedCategory === 'bem' ? 'courses-category-card-active' : 'courses-category-card-inactive'
              }`}
              onClick={() => handleCategoryChange('bem')}
            >
              <div className="courses-category-content">
                <h2 className="courses-category-title">
                  دورات لطلبة ال BEM
                  <br />
                  (شهادة التعليم المتوسط)
                </h2>
                <div 
                  className="courses-category-image-div"
                  style={{ backgroundImage: `url(${leftImage.src})` }}
                ></div>
              </div>
              {selectedCategory === 'bem' && <div className="courses-category-underline"></div>}
            </div>
            
            {/* Secondary Category */}
            <div 
              className={`courses-category-card ${
                selectedCategory === 'secondary' ? 'courses-category-card-active' : 'courses-category-card-inactive'
              }`}
              onClick={() => handleCategoryChange('secondary')}
            >
              <div className="courses-category-content">
                <h2 className="courses-category-title">
                  دورات لطلبة الثانوي
                </h2>
                <div 
                  className="courses-category-image-div"
                  style={{ backgroundImage: `url(${midImage.src})` }}
                ></div>
              </div>
              {selectedCategory === 'secondary' && <div className="courses-category-underline"></div>}
            </div>
            
            {/* University Category */}
            <div 
              className={`courses-category-card ${
                selectedCategory === 'university' ? 'courses-category-card-active' : 'courses-category-card-inactive'
              }`}
              onClick={() => handleCategoryChange('university')}
            >
              <div className="courses-category-content">
                <h2 className="courses-category-title">
                  دورات لطلبة الجامعة
                </h2>
                <div 
                  className="courses-category-image-div"
                  style={{ backgroundImage: `url(${rightImage.src})` }}
                ></div>
              </div>
              {selectedCategory === 'university' && <div className="courses-category-underline"></div>}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="courses-section">
        <div className="courses-content">
          <div className="courses-grid">
            {currentCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                subject={course.subject}
                chapters={course.chapters}
                price={course.price}
                thumbnail={course.thumbnail}
                onEnroll={() => console.log(`Enrolling in ${course.title}`)}
              />
            ))}
          </div>
          
          {/* Working Pagination */}
          <div className="courses-pagination">
            <button 
              className={`courses-pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            <div className="courses-pagination-numbers">
              {getPageNumbers().map((pageNum, index) => (
                pageNum === '...' ? (
                  <span key={`ellipsis-${index}`} className="courses-pagination-ellipsis">...</span>
                ) : (
                  <button
                    key={pageNum}
                    className={`courses-pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNum as number)}
                  >
                    {pageNum}
                  </button>
                )
              ))}
            </div>
            <button 
              className={`courses-pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
          
          {/* Pagination Info */}
          <div className="courses-pagination-info">
            <p>عرض {startIndex + 1}-{Math.min(endIndex, courses.length)} من {courses.length} دورة</p>
          </div>
        </div>
      </section>

      {/* AFAQ+ Section */}
      <section className="courses-afaq-section">
        <div className="courses-afaq-content">
          <div className="courses-afaq-grid">
            <div className="courses-afaq-cards-container">
              <div className="courses-afaq-card courses-afaq-card-1"></div>
              <div className="courses-afaq-card courses-afaq-card-2"></div>
              <div className="courses-afaq-card courses-afaq-card-3">
                <div className="courses-afaq-card-content">
                  <div className="courses-afaq-card-icon">
                    <span className="courses-afaq-card-plus">+</span>
                  </div>
                  <h3 className="courses-afaq-card-title">Python from Zero to Hero</h3>
                  <p className="courses-afaq-card-description">
                    ابحث، استكشف وتعلم المهارات التقنية في مجالات التقنية المختلفة
                  </p>
                </div>
              </div>
            </div>
            
            <div className="courses-afaq-text-content">
              <h2 className="courses-afaq-main-title">
                ابحث، استكشف وتعلم المهارات التقنية مع AFAQ+
              </h2>
              <p className="courses-afaq-description">
                في AFAQ+ يمكن لك أن تكتشف في الدورات والمهارات التقنية في مجالات التقنية المختلفة
                ابحث عن الدورة المناسبة لك، وتعلم على المهارات التي تحتاجها في السوق، وحقق أهدافك المهنية.
                ومن تصميم المواقع إلى الذكاء الاصطناعي، ومن تطبيقات الهاتف إلى علم البيانات، كل شيء في متناولك
              </p>
              <button className="courses-afaq-button">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;





