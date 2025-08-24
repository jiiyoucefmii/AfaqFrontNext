'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import Teachers from '../../../data/TeachersAfaq';
import TeacherDetailLines from '../../../assets/images/TeacherDetaillINES.svg';
import '../../../assets/styles/TeacherDetail.css';
import Dot from '../../../assets/images/Ellipse 64.svg'
import TeacherCoursesCarousel from '../../../components/ui/TeacherCoursesCarousel';
import '../../../assets/styles/LandingPage.css';

interface Teacher {
  id: number;
  name: string;
  module: string;
  description: string;
  image: any;
}

const TeacherDetailPage = () => {
  const params = useParams();
  const teacherId = parseInt(params.id as string);
  
  // Find teacher by ID from the actual TeachersAfaq data
  const teacher = Teachers.find((t: Teacher) => t.id === teacherId);
  
  if (!teacher) {
    return (
      <div className="teacher-detail-container">
        <div className="teacher-not-found">
          <h2>المعلم غير موجود</h2>
          <p>لم يتم العثور على المعلم المطلوب</p>
        </div>
      </div>
    );
  }

  return (
    <div className="teacher-detail-page">
      <div className="teacher-detail-container">
        {/* Header Section */}
        <div className="teacher-header">
          <div className="teacher-name-section">
            <h1 className="teacher-detail-name">{teacher.name}</h1>
            </div>
          <div className="header-icon">
            <img src={TeacherDetailLines.src} alt="Teacher Detail Lines" className="detail-lines-icon" />
          </div>
          
        </div>
        
        {/* Content Section */}
        <div className="teacher-content">
          <div className="teacher-image-section">
            <div className="teacher-image-container">
              <img 
                src={teacher.image.src}
                alt={teacher.name}
                className="teacher-image"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
            </div>
          </div>
          <div className="teacher-description-section">
            <div className="teacher-class">
            <img src={Dot.src} alt="Dot" className="dot-image" />
            <div className="teacher-module">
              <p className="teacher-module-text">{teacher.module}</p>
            </div>
            </div>
            <p className="teacher-description">{teacher.description}</p>
          </div>
        </div>
      </div>
      
      {/* Teacher Courses Carousel */}
      <TeacherCoursesCarousel teacherName={teacher.name} />
    </div>
  );
};

export default TeacherDetailPage;