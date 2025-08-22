import React from 'react';
import Image from 'next/image';
import AfaqPlusLargeSecLeft from '../../assets/images/AfaqPlusLargeSecLeft.png';
import AfaqPlusLogo from '../../assets/images/AfaqPluslogo.svg';
import AfaqPlus from '../../assets/images/AfaqPlus.png';

const AfaqPlusSection: React.FC = () => {
  return (
    <section className="afaq-plus-section">
      <div className="afaq-plus-container">
        <div className="afaq-plus-content">
          <div className="afaq-plus-left">
            <Image src={AfaqPlusLargeSecLeft} alt="AFAQ+ Large Section" className="afaq-plus-large-image" />
          </div>
          
          <div className="afaq-plus-right">
            <div className="afaq-plus-header">
              <Image src={AfaqPlusLogo} alt="AFAQ+ Logo" className="afaq-plus-logo" />
              <h2 className="afaq-plus-title">منصة آفاق بلس</h2>
            </div>
            
            <div className="afaq-plus-features">
              <div className="feature-item">
                <h3>تعلم تفاعلي</h3>
                <p>تجربة تعليمية متطورة مع أدوات تفاعلية حديثة</p>
              </div>
              
              <div className="feature-item">
                <h3>محتوى متميز</h3>
                <p>مناهج مطورة من قبل خبراء في التعليم</p>
              </div>
              
              <div className="feature-item">
                <h3>متابعة مستمرة</h3>
                <p>تقييم دوري ومتابعة تقدم الطلاب</p>
              </div>
            </div>
            
            <div className="afaq-plus-cta">
              <Image src={AfaqPlus} alt="AFAQ+ Platform" className="afaq-plus-image" />
              <button className="cta-button">اكتشف المزيد</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfaqPlusSection;