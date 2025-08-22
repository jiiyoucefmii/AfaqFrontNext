import React from 'react';
import Image from 'next/image';
import AfaqPlusLargeSecLeft from '../../assets/images/AfaqPlusLargeSecLeft.png';
import AfaqPlusLogo from '../../assets/images/AfaqPluslogo.svg';
import AfaqPlus from '../../assets/images/AfaqPlus.png';

const AfaqPlusSection: React.FC = () => {
  return (
    <section className="afaq-plus-section">
      <div className="afaq-plus-container">
        {/* comment 
        <div className="afaq-plus-right">
          <div className="afaq-plus-features">
            <div className="afaq-plus-feature">
              <div className="afaq-plus-feature-icon">
                <Image src={AfaqPlus} alt="Plus" className="plus-icon" />
              </div>
              <div className="afaq-plus-feature-content">
                <h3 className="afaq-plus-feature-title">محتوى محدث باستمرار</h3>
                <p className="afaq-plus-feature-text">نواكب أحدث التقنيات البرمجية والتكنولوجيا.</p>
              </div>
            </div>
            
            <div className="afaq-plus-feature">
              <div className="afaq-plus-feature-icon">
                <Image src={AfaqPlus} alt="Plus" className="plus-icon" />
              </div>
              <div className="afaq-plus-feature-content">
                <h3 className="afaq-plus-feature-title">دورات تقنية عملية</h3>
                <p className="afaq-plus-feature-text">تعلم من خلال مشارية واقعية وأمثلة تطبيقية.</p>
              </div>
            </div>
            
            <div className="afaq-plus-feature">
              <div className="afaq-plus-feature-icon">
                <Image src={AfaqPlus} alt="Plus" className="plus-icon" />
              </div>
              <div className="afaq-plus-feature-content">
                <h3 className="afaq-plus-feature-title">مدربون محترفون</h3>
                <p className="afaq-plus-feature-text">خبراء في مجالاتهم يقدمون لك المعلومة بسلاسة.</p>
              </div>
            </div>
            
            <div className="afaq-plus-feature">
              <div className="afaq-plus-feature-icon">
                <Image src={AfaqPlus} alt="Plus" className="plus-icon" />
              </div>
              <div className="afaq-plus-feature-content">
                <h3 className="afaq-plus-feature-title">شهادات ومهام عملية</h3>
                <p className="afaq-plus-feature-text">احصل على شهادة، وطور ملفك الشخصي بمشاريع حقيقية.</p>
              </div>
            </div>
          </div>
        </div>
        */}
        <div className="afaq-plus-left">
          <Image src={AfaqPlusLargeSecLeft} alt="AFAQ+ Background" className="afaq-plus-bg" />
          <div className="afaq-plus-left-content">
            {/* Top div: Logo on left, text on right */}
            <div className="afaq-plus-top-section">
              <div className="afaq-plus-logo-container">
                <Image src={AfaqPlusLogo} alt="AFAQ+ Logo" className="afaq-plus-logo" />
              </div>
              <div className="afaq-plus-title-container">
                <h2 className="afaq-plus-title">AFAQ+</h2>
                <p className="afaq-plus-subtitle">مستقبلك يبدأ من هنا</p>
              </div>
            </div>
            
            {/* Bottom div: All descriptive text */}
            <div className="afaq-plus-bottom-section">
              <p className="afaq-plus-question">هل تريد تعلم البرمجة؟ الذكاء الاصطناعي؟ التصميم؟</p>
              <div className="afaq-plus-description">
                <p className="afaq-plus-text"><strong>AFAQ+</strong> هي منصتك للمهارات التقنية والمستقبلية.</p>
                <p className="afaq-plus-text">نوفر لك دورات عملية، ومشارية واقعية، بإشراف مدربين محترفين.</p>
                <p className="afaq-plus-text">تعلم بوتيرة مرنة، وكن جاهزاً لسوق العمل.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfaqPlusSection;