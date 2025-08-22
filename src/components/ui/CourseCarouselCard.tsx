import React from 'react';
import Image from 'next/image';

interface CourseCarouselCardProps {
  id: number;
  image: string;
  name: string;
  instructor: string;
  onClick?: () => void;
}

const CourseCarouselCard: React.FC<CourseCarouselCardProps> = ({
  id,
  image,
  name,
  instructor,
  onClick
}) => {
  return (
    <div 
      className="course-card"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="course-image">
        <Image 
          src={image} 
          alt={name} 
          className="course-img"
          width={262}
          height={200}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="course-content">
        <h3 className="course-name">{name}</h3>
        <p className="course-instructor">{instructor}</p>
      </div>
    </div>
  );
};

export default CourseCarouselCard;