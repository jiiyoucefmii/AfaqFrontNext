import React, { useState } from 'react';
import Image from 'next/image';
import questionmark from '../../assets/images/questionmark.png';
import ArrowUp from '../../assets/images/up.svg';
import ArrowDown from '../../assets/images/down.svg';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeFaqItem, setActiveFaqItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 0,
      question: 'كيف يمكنني التسجيل في المنصة؟',
      answer: 'يمكنك التسجيل عبر الموقع واختيار طريقة الدفع المناسبة من الخيارات المتاحة.'
    },
    {
      id: 1,
      question: 'هل يمكنني الوصول للدروس في أي وقت؟',
      answer: 'نعم، يمكنك الوصول للدروس في أي وقت تشاء، المنصة متاحة 24/7.'
    },
    {
      id: 2,
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نوفر عدة طرق دفع منها البطاقات الائتمانية والتحويل البنكي والدفع الإلكتروني.'
    },
    {
      id: 3,
      question: 'هل أحصل على شهادة عند إتمام الدورة؟',
      answer: 'نعم، تحصل على شهادة معتمدة عند إتمام الدورة بنجاح واجتياز الاختبارات.'
    },
    {
      id: 4,
      question: 'هل يتوفر تطبيق خاص بالمنصة؟',
      answer: 'يمكنك التسجيل عبر الموقع واختيار طريقة الدفع المناسبة من الخيارات المتاحة.'
    }
  ];

  const toggleFaqItem = (index: number) => {
    setActiveFaqItem(activeFaqItem === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-image-container">
          <Image src={questionmark} alt="علامة استفهام" className="faq-image" />
        </div>
        
        <div className="faq-content">
          <h2 className="faq-title">الأسئلة الشائعة</h2>
          
          <div className="faq-items">
            {faqItems.map((item) => (
              <div key={item.id} className={`faq-item ${activeFaqItem === item.id ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(item.id)}>
                  <span className="faq-toggle">
                    {activeFaqItem === item.id ? 
                      <Image src={ArrowUp} alt="Up Arrow" /> : 
                      <Image src={ArrowDown} alt="Down Arrow" />
                    }
                  </span>
                  <span>{item.question}</span>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;