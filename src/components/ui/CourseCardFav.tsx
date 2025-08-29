import React, { useState } from 'react';
import { FaStar, FaTrash, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import '../../assets/styles/CourseCardFav.css';
import openBookIcon from '../../assets/images/open-book-svgrepo-com.svg';
import cashIcon from '../../assets/images/Cash.svg';

interface CourseCardProps {
  courseId?: string | number;
  title?: string;
  instructor?: string;
  subject?: string;
  chapters?: number;
  price?: string;
  thumbnail?: string;
  rating?: number;
  onEnroll?: () => void;
  onRemoveFromFavorites?: (courseId: string | number) => void;
  className?: string;
  type?: 'enrollment' | 'progress';
  progress?: number;
  initialIsFavorite?: boolean;
}

// Custom Confirmation Modal Component
const ConfirmationModal: React.FC<{
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-modal">
      <div className="confirm-modal-content">
        <p className="confirm-modal-text">
          هل تريد إزالة هذا الدرس من المفضلة؟
        </p>
        
        <div className="confirm-modal-buttons">
          <button 
            className="cancel-button"
            onClick={onCancel}
          >
            إلغاء
          </button>
          <button 
            className="confirm-button"
            onClick={onConfirm}
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CourseCard({
  courseId,
  title = "دورة المراجعة النهائية رياضيات",
  instructor = "الاستاذ بريك اسامة",
  subject = "رياضيات",
  chapters = 10,
  price = "2500 DA",
  thumbnail = "https://api.builder.io/api/v1/image/assets/TEMP/aa9b25a4d163661cffb5fc79e7ab43802c67123c?width=522",
  rating = 5,
  onEnroll,
  onRemoveFromFavorites,
  className = "",
  type = 'enrollment',
  progress = 0,
  initialIsFavorite = true,
}: CourseCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleStarClick = () => {
    if (isFavorite) {
      setShowConfirmation(true);
    } else {
      setIsFavorite(true);
    }
  };

  const handleConfirmRemove = () => {
    if (courseId && onRemoveFromFavorites) {
      setIsFavorite(false);
      onRemoveFromFavorites(courseId);
    }
    setShowConfirmation(false);
  };

  const handleCancelRemove = () => {
    setShowConfirmation(false);
  };

  return (
    <>
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
          
          {/* Star Rating with Click Handler */}
          <div 
            className={`afaq-course-card-star-icon ${isFavorite ? 'favorite' : 'not-favorite'}`}
            onClick={handleStarClick}
            title={isFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
          >
            <FaStar 
              fill={isFavorite ? "#eab308" : "#d1d5db"} 
              color={isFavorite ? "#eab308" : "#d1d5db"} 
            />
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
            
            {/* Conditional rendering based on type */}
            {type === 'enrollment' ? (
              <div className="afaq-course-card-price">
                <Image 
                  src={cashIcon}
                  alt="Cash"
                  width={16}
                  height={16}
                />
                <span>{price}</span>
              </div>
            ) : (
              <div className="afaq-course-card-progress">
                <div className="afaq-course-card-progress-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" fill="none"/>
                    <path d="M8 12l3 3 5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{progress}% نسبة التقدم العامة</span>
              </div>
            )}
          </div>
          
          {/* Conditional rendering of button */}
          {type === 'enrollment' && (
            <button 
              className="afaq-course-card-enroll-btn"
              onClick={onEnroll}
            >
              التسجيل في الدورة
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmation}
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
      />
    </>
  );
}