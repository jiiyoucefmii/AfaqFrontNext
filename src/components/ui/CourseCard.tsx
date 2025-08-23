import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import '../../assets/styles/CourseCard.css';
import openBookIcon from '../../assets/images/open-book-svgrepo-com.svg';
import cashIcon from '../../assets/images/Cash.svg';

interface CourseCardProps {
  title?: string;
  instructor?: string;
  subject?: string;
  chapters?: number;
  price?: string;
  thumbnail?: string;
  rating?: number;
  onEnroll?: () => void;
  className?: string;
}

export default function CourseCard({
  title = "دورة المراجعة النهائية رياضيات",
  instructor = "الاستاذ بريك اسامة", 
  subject = "رياضيات",
  chapters = 10,
  price = "2500 DA",
  thumbnail = "https://api.builder.io/api/v1/image/assets/TEMP/aa9b25a4d163661cffb5fc79e7ab43802c67123c?width=522",
  rating = 5,
  onEnroll,
  className = "",
}: CourseCardProps) {
  
  return (
    <div className={`afaq-course-card ${className}`} dir="rtl">
      <div className="afaq-course-card-image-container">
        <Image 
          src={thumbnail}
          alt={title}
          className="afaq-course-card-image"
          width={262}
          height={245}
          style={{ objectFit: 'cover' }}
        />
        
        {/* Star Rating */}
        <div className="afaq-course-card-star-icon">
          <FaStar fill="#eab308" color="#eab308" />
        </div>
        
        {/* Subject Badge */}
        <div className="afaq-course-card-subject-badge">
          <span className="afaq-course-card-subject-text">{subject}</span>
        </div>
      </div>
      
      <div className="afaq-course-card-content">
        <h3 className="afaq-course-card-title">{title}</h3>
        <p className="afaq-course-card-instructor">{instructor}</p>
        
        <div className="afaq-course-card-info">
          <div className="afaq-course-card-chapters">
            <Image 
              src={openBookIcon} 
              alt="Open Book" 
              width={16} 
              height={16}
            />
            <span>{chapters} فصل</span>
          </div>
          <div className="afaq-course-card-price">
            <Image 
              src={cashIcon} 
              alt="Cash" 
              width={16} 
              height={16}
            />
            <span>{price}</span>
          </div>
        </div>
        
        <button 
          className="afaq-course-card-enroll-btn"
          onClick={onEnroll}
        >
          التسجيل في الدورة
        </button>
      </div>
    </div>
  );
}
