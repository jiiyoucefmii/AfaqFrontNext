'use client';
import React, { useState } from 'react';
import CardOver from '@/components/ui/CardOverS';
import Skills from '@/components/Profile/Skills';
import FavoriteCourses from '@/components/Profile/FavoriteCourses';
import Pagination from '@/components/AfaqPLus/Pagination';
import '@/assets/styles/OverviewS.css';

// Sample data - replace with your actual data
const skillsData = [
  { id: 1, name: 'HTML / CSS', progress: 90, icon: '🌐' },
  { id: 2, name: 'Python Basics', progress: 75, icon: '🐍' },
  { id: 3, name: 'UI/UX Fundamentals', progress: 60, icon: '🎨' },
  { id: 4, name: 'JavaScript', progress: 80, icon: '⚡' },
  { id: 5, name: 'React', progress: 70, icon: '⚛️' },
  { id: 6, name: 'Node.js', progress: 65, icon: '🟢' },
  { id: 7, name: 'MongoDB', progress: 55, icon: '🍃' },
];

const coursesData = [
  {
    id: 1,
    image: '/images/web-development.jpg',
    title: 'دورة تطوير المواقع الشاملة',
    instructor: 'أحمد محمد',
    originalPrice: '6000 DA',
    currentPrice: '1500 DA',
    progress: 75,
    rating: 5,
    studentsCount: 2847
  },
  {
    id: 2,
    image: '/images/ai-prototyping.jpg',
    title: 'دورة النمذجة الأولية بالذكاء الاصطناعي',
    instructor: 'سارة أحمد',
    currentPrice: '2000 DA',
    progress: 45,
    rating: 4,
    studentsCount: 1523
  },
  {
    id: 3,
    image: '/images/website-development.jpg',
    title: 'تطوير المواقع الاحترافية',
    instructor: 'محمد علي',
    originalPrice: '5000 DA',
    currentPrice: '1800 DA',
    progress: 90,
    rating: 5,
    studentsCount: 3201
  }
];

const OverviewS: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(coursesData.length / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedCourses = coursesData.slice(indexStart, indexStart + itemsPerPage);

  return (
    <div className="overviewt">
      <p className="big-overview">Overview</p>
      <hr className="hr-ov" />

      {/* Stats Cards */}
      <div className="info-courses">
        <CardOver number={16} text="الدورات المكتملة" />
        <CardOver number={2} text="الدورات الجارية" />
        <CardOver number={550} text="عدد الساعات المنجزة" />
        <CardOver percent={87} text="نسبة التقدم العامة" />
      </div>

      {/* Skills Section */}
      <Skills skills={skillsData} />

      {/* Favorite Courses Section */}
      <FavoriteCourses courses={displayedCourses} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default OverviewS;