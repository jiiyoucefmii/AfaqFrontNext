import React from 'react';
import { Star, BookOpen, DollarSign } from 'lucide-react';
import '../../assets/styles/CourseCard.css';
import RocketIcon from '../../assets/images/Rocket.svg';

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
}) {
  console.log('CourseCard props:', { title, instructor, subject, chapters, price });
  
  return (
    <div className={`afaq-course-card ${className}`} dir="rtl">
      <div className="afaq-course-card-image-container">
        <img 
          src={thumbnail}
          alt={title}
          className="afaq-course-card-image"
        />
        
        {/* Star Rating - at top-right */}
        <div className="afaq-course-card-star-icon">
          <Star fill="#eab308" color="#eab308" />
        </div>
        
        {/* Subject Badge - restored below thumbnail */}
        <div className="afaq-course-card-subject-badge">
          <span className="afaq-course-card-subject-text">{subject}</span>
        </div>
      </div>
      
      <div className="afaq-course-card-content">
        <h3 className="afaq-course-card-title">
          {title}
        </h3>
        <p className="afaq-course-card-instructor">
          {instructor}
        </p>
        
        <div className="afaq-course-card-info">
          <div className="afaq-course-card-info-item">
            <BookOpen className="afaq-course-card-chapters-icon" />
            <span className="afaq-course-card-chapters-text">{chapters} فصل</span>
          </div>
          <div className="afaq-course-card-info-item">
            <DollarSign className="afaq-course-card-price-icon" />
            <span className="afaq-course-card-price-text">{price}</span>
          </div>
        </div>
        
        <button 
          className="afaq-course-card-button"
          onClick={onEnroll}
          type="button"
        >
          ابدأ الآن
          <img src={RocketIcon} alt="Rocket" className="afaq-course-card-button-icon" />
        </button>
      </div>
    </div>
  );
}

// Alternative version using Tailwind classes (if you prefer Tailwind over custom CSS)
export function CourseCardTailwind({
  title = "دورة المراجعة النهائية رياضيات",
  instructor = "الاستاذ بريك اسامة", 
  subject = "رياضيات",
  chapters = 10,
  price = "2500 DA",
  thumbnail = "https://api.builder.io/api/v1/image/assets/TEMP/aa9b25a4d163661cffb5fc79e7ab43802c67123c?width=522",
  rating = 5,
  onEnroll,
  className = "",
}) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div className="relative">
        <img 
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <Star className="w-5 h-5 text-yellow-500" />
        </div>
        <div className="absolute bottom-0 right-0 bg-afaq-cyan px-4 py-2 rounded-tl-xl">
          <span className="text-white font-poppins font-bold">{subject}</span>
        </div>
        <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-center font-poppins font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-center font-poppins text-gray-600 mb-4">
          {instructor}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-afaq-blue" />
            <span className="text-afaq-blue font-poppins">{chapters} Chapters</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-afaq-green" />
            <span className="text-afaq-green font-poppins">{price}</span>
          </div>
        </div>
        
        <button 
          className="w-full mt-4 bg-gradient-to-r from-yellow-200 to-afaq-yellow text-gray-800 py-2 rounded border border-gray-400 font-poppins text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          onClick={onEnroll}
        >
          <Rocket className="w-4 h-4" />
          ابدأ الآن
        </button>
      </div>
    </div>
  );
}
