'use client'

import React from 'react'
import Image from 'next/image'
import secStar from '../../assets/images/SecStar.png'

interface Feature {
  title: string
  subtitle: string
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "محتوى عالي الجودة",
      subtitle: "دروس مصممة بعناية من قبل خبراء التعليم"
    },
    {
      title: "مرونة في التعلم",
      subtitle: "تعلم في الوقت والمكان الذي يناسبك"
    },
    {
      title: "دعم مستمر",
      subtitle: "فريق دعم متاح لمساعدتك في أي وقت"
    },
    {
      title: "تقييم مستمر",
      subtitle: "اختبارات وتقييمات لقياس تقدمك"
    },
    {
      title: "أسعار مناسبة",
      subtitle: "خطط أسعار تناسب جميع الطلاب"
    },
    {
      title: "شهادات معتمدة",
      subtitle: "احصل على شهادات معتمدة عند إتمام الدورات"
    }
  ]

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-content">
          <div className="features-text">
            <h2 className="features-main-title">لماذا تختار منصة آفاق؟</h2>
            <p className="features-description">نقدم لك تجربة تعليمية متميزة تجمع بين الجودة والمرونة</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-item feature-item-${index + 1}`}>
                <div className="feature-icon">
                  <Image src={secStar} alt="نجمة" className="star-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-subtitle">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection