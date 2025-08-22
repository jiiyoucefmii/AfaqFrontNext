import React from 'react';
import Image from 'next/image';
import Pin from '../../assets/images/pin.svg';
import Trail from '../../assets/images/Trail.svg';

interface ProgramStep {
  id: number;
  title: string;
  description: string;
}

const ProgramPathSection: React.FC = () => {
  const programSteps: ProgramStep[] = [
    {
      id: 1,
      title: 'قم بإنشاء حساب',
      description: 'قم بالتسجيل وانضم إلى منصتنا التعليمية'
    },
    {
      id: 2,
      title: 'اختر الدورات التي تناسبك',
      description: 'تصفح المنصة و استفد من دوراتنا المتميزة'
    },
    {
      id: 3,
      title: 'الانضمام إلى الدورة',
      description: 'بعد اختيارك للدورة اضغط على زر الاشتراك ستجد طلبك قيد المعالجة'
    },
    {
      id: 4,
      title: 'عملية الدفع',
      description: 'تواصل معنا على قناة التلغرام و ارسل لنا بنك الدفع و معلوماتك الشخصية'
    }
  ];

  return (
    <section className="program-path-section">
      <h2 className="program-path-title">مسارك للمشاركة في البرنامج</h2>
      <div className="program-path-container">
        <Image src={Trail} alt="Trail" className="program-path-trail" />
        {programSteps.map((step, index) => (
          <div key={step.id} className={`program-path-step step-${step.id}`}>
            <div className="program-path-step-content">
              <Image src={Pin} alt="Pin" className="program-path-pin" />
              <div className="program-path-step-content">
                <div className="program-path-step-title">{step.id} {step.title}</div>
                <div className="program-path-step-desc">{step.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramPathSection;