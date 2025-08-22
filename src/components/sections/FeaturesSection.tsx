'use client'

import React from 'react'
import Image from 'next/image'

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-content">
          {/* Left Section */}
          <div className="features-left">
            <h2 className="features-main-title">لماذا آفاق؟</h2>
            <div className="features-text">
              <p className="features-description">
                نوفر لك تجربة تعليمية حديثة وأكثر كفاءة من الأساليب التقليدية، بمرونة تامة في التعلم من أي مكان وفي أي وقت.
              </p>
              <p className="features-description">
                ستتمتع في بيئة محفزة على النجاح، مع إمكانية مراجعة الدروس المسجلة في أي وقت، إضافة إلى كتب ومراجع معتمدة مستخدمة داخل التخصص.
              </p>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="features-right">
            <h2 className="features-main-title">ماذا نقدم؟</h2>
            <div className="features-grid">
              <div className="feature-item feature-item-1">
                <div className="feature-icon">
                  <Image src="/images/SecStar.png" alt="نجمة" className="star-icon" width={24} height={24} />
                </div>
                <div className="feature-content">
                  <p className="feature-subtitle">أسعار مناسبة ومتاحة للجميع</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-2">
                <div className="feature-icon">
                  <Image src="/images/SecStar.png" alt="نجمة" className="star-icon" width={24} height={24} />
                </div>
                <div className="feature-content">
                  <p className="feature-subtitle">إمكانية متابعة الدروس من الهاتف أو الحاسوب</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-3">
                <div className="feature-icon">
                  <Image src="/images/SecStar.png" alt="نجمة" className="star-icon" width={24} height={24} />
                </div>
                <div className="feature-content">
                  <p className="feature-subtitle">إشراف نخبة من الأساتذة المتخصصين</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-4">
                <div className="feature-icon">
                  <Image src="/images/SecStar.png" alt="نجمة" className="star-icon" width={24} height={24} />
                </div>
                <div className="feature-content">
                  <p className="feature-subtitle">دروس مباشرة (صوت وصورة) عبر تطبيق Zoom</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-5">
                <div className="feature-icon">
                  <Image src="/images/SecStar.png" alt="نجمة" className="star-icon" width={24} height={24} />
                </div>
                <div className="feature-content">
                  <p className="feature-subtitle">تعليم عن بُعد لجميع الأطوار التعليمية في الجزائر</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-6">
                <div className="feature-icon">
                  <Image src="/images/SecStar.png" alt="نجمة" className="star-icon" width={24} height={24} />
                </div>
                <div className="feature-content">
                  <p className="feature-subtitle">تغطية شاملة لجميع المواد والمستويات الدراسية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection