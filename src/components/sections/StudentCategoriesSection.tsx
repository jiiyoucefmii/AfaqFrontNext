'use client'

import React from 'react'
import Image from 'next/image'
import leftImage from '../../assets/images/LeftImage.png'
import midImage from '../../assets/images/MidImage.png'
import rightImage from '../../assets/images/RightImage.png'
import circleImage from '../../assets/images/Circle.png'

const StudentCategoriesSection: React.FC = () => {
  const categories = [
    {
      image: rightImage,
      title: "طلاب الجامعة",
      description: "دورات متخصصة تساعد طلاب الجامعة على التفوق في دراستهم الأكاديمية"
    },
    {
      image: midImage,
      title: "طلاب في المدرسة الثانوية",
      description: "برامج شاملة لطلاب المرحلة الثانوية للتحضير للامتحانات والجامعة"
    },
    {
      image: leftImage,
      title: "طلاب مقبلون على امتحان شهادة التعليم المتوسط",
      description: "دروس تفاعلية مصممة خصيصاً لطلاب المرحلة المتوسطة"
    }
  ]

  return (
    <>
      <div className='category-title'>
        <p>من يستفيد من منصتنا؟</p>
      </div>
      
      <div className="student-categories-section">
        <div className="images-container">
          {categories.map((category, index) => (
            <div key={index} className="student-category">
              <div className="student-image-container">
                <Image  src={circleImage}  alt="دائرة خلفية"  className="circle-background"  />
                <Image src={category.image} alt={category.title} className="student-image" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-rectangle">
          <div className="text-content">
            {categories.map((category, index) => (
              <div key={index} className="text-item">
                <h3 style={{ 
                  fontFamily: 'Amiri', 
                  fontWeight: 700, 
                  fontSize: '36px',
                  textAlign: 'center'
                }}>
                  {category.title}
                </h3>
                <p style={{ 
                  fontFamily: 'Poppins', 
                  fontWeight: 500, 
                  fontSize: '20px',
                  textAlign: 'center'
                }}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentCategoriesSection