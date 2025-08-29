'use client'

import React, { useState } from 'react';
import CourseCard from '../../components/ui/CourseCardFav';
import '../../assets/styles/FavoriteACourses.css';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import CoursesAfaqP from '../../Data/CoursesAfaqPP';
import Image, { StaticImageData } from "next/image";


import starFilled from "../../assets/images/Star-colored.svg";
import tableOfContent from "../../assets/images/Table of Content.svg";
import dollarIcon from "../../assets/images/Us Dollar Circled.svg";
import playIcon from "../../assets/images/Circled Play Button.svg";
import YourPaginationComponent from '../AfaqPLus/Pagination';
interface StandardCourse {
  id: number;
  title: string;
  instructor: string;
  subject: string;
  chapters: number;
  price: string;
  thumbnail: any;
  level: 'bem' | 'secondary' | 'university';
  type: 'enrollment' | 'progress';
  progress?: number;
  courseType: 'standard';
}

interface AfaqPlusCourse {
  id: number;
  image: string | StaticImageData;
  title: string;
  chapters: number;
  price: number;
  category: string;
  level: string;
  duration: string;
  courseType: 'afaqplus';
}

type Course = StandardCourse | AfaqPlusCourse;

const FavoriteCourses: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [courseToRemove, setCourseToRemove] = useState<number | null>(null);

  // Initialize standard courses
  const initialStandardCourses: StandardCourse[] = [
    {
      id: 1,
      title: "دورة المراجعة النهائية رياضيات",
      instructor: "الاستاذ بريك اسامة",
      subject: "رياضيات",
      chapters: 10,
      price: "2500 DA",
      thumbnail: pic1,
      level: 'secondary',
      type: 'enrollment',
      courseType: 'standard',
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
      type: 'progress',
      progress: 88,
      courseType: 'standard',
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
      type: 'enrollment',
      courseType: 'standard',
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
      type: 'progress',
      progress: 65,
      courseType: 'standard',
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
      type: 'progress',
      progress: 92,
      courseType: 'standard',
    },
  ];

  // Initialize AfaqPlus courses with courseType
  const initialAfaqPlusCourses: AfaqPlusCourse[] = CoursesAfaqP.map(course => ({
    ...course,
    courseType: 'afaqplus' as const
  }));

  // Combine all courses
  const [allCourses, setAllCourses] = useState<Course[]>([
    ...initialStandardCourses,
    ...initialAfaqPlusCourses
  ]);

  // Handle course removal from favorites
  const handleRemoveFromFavorites = (courseId: string | number) => {
    setAllCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
  };

  const toggleLike = (id: number) => {
    setCourseToRemove(id);
    setShowConfirmModal(true);
  };

  const confirmRemove = () => {
    if (courseToRemove !== null) {
      handleRemoveFromFavorites(courseToRemove);
    }
    setShowConfirmModal(false);
    setCourseToRemove(null);
  };

  const cancelRemove = () => {
    setShowConfirmModal(false);
    setCourseToRemove(null);
  };

  // Pagination calculations
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = allCourses.slice(startIndex, endIndex);

  // Pagination handlers
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Removed scroll to top behavior
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

  // Generate all page numbers for pagination
  const getAllPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Render AfaqPlus course card
  const renderAfaqPlusCourse = (course: AfaqPlusCourse, index: number) => (
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
            src={starFilled}
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

      {index % 2 === 0 ? (
        <>
          <div className="price">
            <Image src={dollarIcon} alt="price" width={20} height={20} />
            <p>{course.price} DA</p>
          </div>
          <div className="Play-now-btn-wrapper">
            <button className="Play-now-btn">
              <Image src={playIcon} alt="play" width={19} height={19} />
              <p>ابدأ الآن </p>
            </button>
          </div>
        </>
      ) : (
        <div className="progress-sentence">
          <p>88 %  نسبة التقدم العامة </p>
        </div>
      )}
    </div>
  );

  // Render standard course card
  const renderStandardCourse = (course: StandardCourse) => (
    <CourseCard
      key={course.id}
      courseId={course.id}
      title={course.title}
      instructor={course.instructor}
      subject={course.subject}
      chapters={course.chapters}
      price={course.price}
      thumbnail={course.thumbnail}
      initialIsFavorite={true}
      type={course.type}
      progress={course.progress}
      onEnroll={() => console.log(`Enrolling in ${course.title}`)}
      onRemoveFromFavorites={handleRemoveFromFavorites}
      onFavoriteToggle={(courseId, isFavorite) => {
        console.log(`Course ${courseId} favorite status: ${isFavorite}`);
      }}
    />
  );

  return (
    <div className="favorite-courses-section">
      <div className="courses-header">
        <h2 className="courses-title">الدورات المفضلة</h2>
        <p className="courses-subtitle">هنا تجد كل ما نال إعجابك من دورات تعليمية</p>
        <hr className="courses-divider" />
      </div>
      
      <div className="courses-container">
        <section className="courses-section">
          <div className="courses-content">
            <div className="courses-grid">
              {currentCourses.map((course, index) => (
                course.courseType === 'afaqplus' 
                  ? renderAfaqPlusCourse(course as AfaqPlusCourse, index)
                  : renderStandardCourse(course as StandardCourse)
              ))}
            </div>
            
          
            <YourPaginationComponent 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
              // Add any other props your component needs
            />
            
            {/* Pagination Info */}
            <div className="courses-pagination-info">
              <p>عرض {startIndex + 1}-{Math.min(endIndex, allCourses.length)} من {allCourses.length} دورة</p>
            </div>
          </div>
        </section>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="confirm-modal">
          <div className="confirm-modal-content">
            <p className="confirm-modal-text">هل تريد إزالة هذا الدرس من المفضلة؟</p>
            <div className="confirm-modal-buttons">
              <button onClick={confirmRemove} className="confirm-button">تأكيد</button>
              <button onClick={cancelRemove} className="cancel-button">إلغاء</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteCourses;