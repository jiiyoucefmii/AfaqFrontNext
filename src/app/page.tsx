'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Import LandingPage.css AFTER globals.css to ensure it takes precedence
import './assets/styles/LandingPage.css'

// Import all images
import yellowHero from './assets/images/yellowHero.png'
import mockupPC from './assets/images/MockupPC.png'
import leftImage from './assets/images/LeftImage.png'
import midImage from './assets/images/MidImage.png'
import rightImage from './assets/images/RightImage.png'
import circleImage from './assets/images/Circle.png'
import leftStatsDecoration from './assets/images/leftstatsec.png'
import rightStatsDecoration from './assets/images/rightstatsec.png'
import secStar from './assets/images/SecStar.png'
import pic1 from './assets/images/pic1.png'
import pic2 from './assets/images/pic2.png'
import pic3 from './assets/images/pic3.png'
import pic4 from './assets/images/pic4.png'
import AfaqPlusLargeSecLeft from './assets/images/AfaqPlusLargeSecLeft.png'
import AfaqPlusLogo from './assets/images/AfaqPluslogo.svg'
import AfaqPlus from './assets/images/AfaqPlus.png'
import Pin from './assets/images/pin.svg'
import Trail from './assets/images/Trail.svg'
import questionmark from './assets/images/questionmark.png'
import ArrowUp from './assets/images/up.svg'
import ArrowDown from './assets/images/down.svg'
import Colad from './assets/images/colad.svg'
import ColadEnd from './assets/images/coladend.svg'
import Quotes from './assets/images/Quotes.svg'
import mdsLogo from './assets/images/mds.png'
import ensiaLogo from './assets/images/ensia.png'
import baridLogo from './assets/images/barid.png'
import telecommLogo from './assets/images/telecomm.png'
import leftArrow from './assets/images/leftarrow.svg'
import rightArrow from './assets/images/rightarrow.svg'

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeFaqItem, setActiveFaqItem] = useState<number | null>(null)

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "طالب جامعي",
      content: "منصة آفاق غيرت طريقة تعلمي تماماً. المحتوى ممتاز والمدرسون محترفون.",
      rating: 5
    },
    {
      name: "فاطمة علي",
      role: "طالبة ثانوية",
      content: "أفضل منصة تعليمية جربتها. ساعدتني كثيراً في تحسين درجاتي.",
      rating: 5
    },
    {
      name: "محمد حسن",
      role: "طالب متوسط",
      content: "الدروس واضحة ومفهومة، والتفاعل مع المدرسين رائع.",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const toggleFaqItem = (index: number) => {
    setActiveFaqItem(activeFaqItem === index ? null : index)
  }

  // Static values instead of animated ones
  const stats = {
    students: "25 062",
    hours: "6 580", 
    teachers: "87",
    courses: "160"
  }

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-upper">
          <div className="hero-text">
            <h1 className='hero-title'>منصة <span className='highlight-yellow'>آفاق</span> التعليمية</h1>
            <p className="hero-subtext">الخبير في كل شيء كان مبتدئاً في يوم ما</p>
          </div>
          <div className="hero-image">
            <Image src={yellowHero} alt="آفاق التعليمية" className="yellow-hero" />
          </div>
        </div>
        
        <div className="hero-lower">
          <div className="mockup-image">
            <Image src={mockupPC} alt="جهاز كمبيوتر يعرض منصة آفاق" className="mockup-pc" />
          </div>
          <div className="hero-content">
            <h2>منصة آفاق - تعلم عن بُعد بأسلوب مبتكر</h2>
            <p>منصة آفاق توفر تجربة تعليمية شاملة ومرنة عبر الإنترنت، تجمع بين المتعة والفعالية لتساعدك على التعلم بسهولة وفي الوقت والمكان الذي يناسبك.</p>
          </div>
        </div>
      </div>
      
      <div className='category-title'>
        <p>من يستفيد من منصتنا؟</p>
      </div>
      
      {/* Student Categories Section */}
      <div className="student-categories-section">
        {/* Images Container */}
        <div className="images-container">
          <div className="student-category">
            <div className="student-image-container">
              <Image src={circleImage} alt="دائرة خلفية" className="circle-background" />
              <Image src={rightImage} alt="طلاب في الجامعة" className="student-image" />
            </div>
          </div>

          <div className="student-category">
            <div className="student-image-container">
              <Image src={circleImage} alt="دائرة خلفية" className="circle-background" />
              <Image src={midImage} alt="طلاب في المدرسة الثانوية" className="student-image" />
            </div>
          </div>

          <div className="student-category">
            <div className="student-image-container">
              <Image src={circleImage} alt="دائرة خلفية" className="circle-background" />
              <Image src={leftImage} alt="طلاب مقبلون على امتحان شهادة التعليم المتوسط" className="student-image" />
            </div>
          </div>
        </div>
        
        {/* Text Container Rectangle */}
        <div className="text-rectangle">
          <div className="text-content">
            <div className="text-item">
              <h3>طلاب الجامعة</h3>
              <p>دورات متخصصة تساعد طلاب الجامعة على التفوق في دراستهم الأكاديمية</p>
            </div>
            <div className="text-item">
              <h3>طلاب الثانوية</h3>
              <p>برامج شاملة لطلاب المرحلة الثانوية للتحضير للامتحانات والجامعة</p>
            </div>
            <div className="text-item">
              <h3>طلاب المتوسط</h3>
              <p>دروس تفاعلية مصممة خصيصاً لطلاب المرحلة المتوسطة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-content">
            <div className="features-text">
              <h2 className="features-main-title">لماذا تختار منصة آفاق؟</h2>
              <p className="features-description">نقدم لك تجربة تعليمية متميزة تجمع بين الجودة والمرونة</p>
            </div>
            
            <div className="features-grid">
              <div className="feature-item feature-item-1">
                <div className="feature-icon">
                  <Image src={secStar} alt="نجمة" className="star-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">محتوى عالي الجودة</h3>
                  <p className="feature-subtitle">دروس مصممة بعناية من قبل خبراء التعليم</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-2">
                <div className="feature-icon">
                  <Image src={secStar} alt="نجمة" className="star-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">مرونة في التعلم</h3>
                  <p className="feature-subtitle">تعلم في الوقت والمكان الذي يناسبك</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-3">
                <div className="feature-icon">
                  <Image src={secStar} alt="نجمة" className="star-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">دعم مستمر</h3>
                  <p className="feature-subtitle">فريق دعم متاح لمساعدتك في أي وقت</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-4">
                <div className="feature-icon">
                  <Image src={secStar} alt="نجمة" className="star-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">تقييم مستمر</h3>
                  <p className="feature-subtitle">اختبارات وتقييمات لقياس تقدمك</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-5">
                <div className="feature-icon">
                  <Image src={secStar} alt="نجمة" className="star-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">أسعار مناسبة</h3>
                  <p className="feature-subtitle">خطط أسعار تناسب جميع الطلاب</p>
                </div>
              </div>
              
              <div className="feature-item feature-item-6">
                <div className="feature-icon">
                  <Image src={secStar} alt="نجمة" className="star-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">شهادات معتمدة</h3>
                  <p className="feature-subtitle">احصل على شهادات معتمدة عند إتمام الدورات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-decoration-left">
          <Image src={leftStatsDecoration} alt="زخرفة يسار" className="decoration-image" />
        </div>
        <div className="stats-decoration-right">
          <Image src={rightStatsDecoration} alt="زخرفة يمين" className="decoration-image" />
        </div>
        
        <div className="stats-container">
          <div className="stats-content">
            <div className="stat-item">
              <div className="stat-number">{stats.students}</div>
              <div className="stat-label">طالب مسجل</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.hours}</div>
              <div className="stat-label">ساعة تعليمية</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.teachers}</div>
              <div className="stat-label">مدرس خبير</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.courses}</div>
              <div className="stat-label">دورة تدريبية</div>
            </div>
          </div>
        </div>
      </section>
      

{/* Courses Section */}
<section className="courses-section">
  <div className="courses-container">
    <div className="courses-header">
      <h2 className="courses-title">الدورات المتاحة</h2>
      <p className="courses-subtitle">اختر من بين مجموعة متنوعة من الدورات التعليمية</p>
    </div>
    
    <div className="courses-carousel">
      <div className="courses-grid">
        <div className="course-card">
          <div className="course-image">
            <Image src={pic1} alt="دورة الكيمياء المراجعة النهائية" className="course-img" />
          </div>
          <div className="course-content">
            <h3 className="course-name">دورة الكيمياء المراجعة النهائية</h3>
            <p className="course-instructor">الأستاذ بريك أسامة</p>
          </div>
        </div>
        
        <div className="course-card">
          <div className="course-image">
            <Image src={pic2} alt="دورة الفيزياء المراجعة النهائية" className="course-img" />
          </div>
          <div className="course-content">
            <h3 className="course-name">دورة الفيزياء المراجعة النهائية</h3>
            <p className="course-instructor">الأستاذ بريك أسامة</p>
          </div>
        </div>
        
        <div className="course-card">
          <div className="course-image">
            <Image src={pic3} alt="دورة المراجعة النهائية رياضيات" className="course-img" />
          </div>
          <div className="course-content">
            <h3 className="course-name">دورة المراجعة النهائية رياضيات</h3>
            <p className="course-instructor">الأستاذ بريك أسامة</p>
          </div>
        </div>
        
        <div className="course-card">
          <div className="course-image">
            <Image src={pic4} alt="دورة النبوي و المراجعة النهائية" className="course-img" />
          </div>
          <div className="course-content">
            <h3 className="course-name">دورة النبوي و المراجعة النهائية</h3>
            <p className="course-instructor">الأستاذ بريك أسامة</p>
          </div>
        </div>
      </div>
      
      <button className="carousel-arrow carousel-arrow-left">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
    
    <div className="courses-bottom">
      <button className="see-all-btn">عرض الكل</button>
    </div>
  </div>
</section>

{/* AFAQ+ Section */}
<section className="afaq-plus-section">
  <div className="afaq-plus-container">
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
    <div className="afaq-plus-left">
      <Image src={AfaqPlusLargeSecLeft} alt="AFAQ+ Background" className="afaq-plus-bg" />
      <div className="afaq-plus-left-content">
        <div className="afaq-plus-logo-container">
          <Image src={AfaqPlusLogo} alt="AFAQ+ Logo" className="afaq-plus-logo" />
          <h2 className="afaq-plus-title">AFAQ+</h2>
        </div>
        <p className="afaq-plus-subtitle">مستقبلك يبدأ من هنا</p>
        <p className="afaq-plus-question">هل تريد تعلم البرمجة؟ الذكاء الاصطناعي؟ التصميم؟</p>
        <div className="afaq-plus-description">
          <p className="afaq-plus-text"><strong>AFAQ+</strong> هي منصتك للمهارات التقنية والمستقبلية.</p>
          <p className="afaq-plus-text">نوفر لك دورات عملية، ومشارية واقعية، بإشراف مدربين محترفين.</p>
          <p className="afaq-plus-text">تعلم بوتيرة مرنة، وكن جاهزاً لسوق العمل.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Program Path Section */}
<section className="program-path-section">
  <h2 className="program-path-title">مسارك للمشاركة في البرنامج</h2>
  <div className="program-path-container">
    <Image src={Trail} alt="Trail" className="program-path-trail" />
    <div className="program-path-step step-1">
      <div className="program-path-step-content">
        <Image src={Pin} alt="Pin" className="program-path-pin" />
        <div className="program-path-step-content">
          <div className="program-path-step-title">1 قم بإنشاء حساب</div>
          <div className="program-path-step-desc">قم بالتسجيل وانضم إلى منصتنا التعليمية</div>
        </div>
      </div>
    </div>
    <div className="program-path-step step-2">
      <Image src={Pin} alt="Pin" className="program-path-pin" />
      <div className="program-path-step-content">
        <div className="program-path-step-title">2 اختر الدورات التي تناسبك</div>
        <div className="program-path-step-desc">تصفح المنصة و استفد من دوراتنا المتميزة</div>
      </div>
    </div>
    <div className="program-path-step step-3">
      <Image src={Pin} alt="Pin" className="program-path-pin" />
      <div className="program-path-step-content">
        <div className="program-path-step-title">3 الانضمام إلى الدورة</div>
        <div className="program-path-step-desc">بعد اختيارك للدورة اضغط على زر الاشتراك ستجد طلبك قيد المعالجة</div>
      </div>
    </div>
    <div className="program-path-step step-4">
      <Image src={Pin} alt="Pin" className="program-path-pin" />
      <div className="program-path-step-content">
        <div className="program-path-step-title">4 عملية الدفع</div>
        <div className="program-path-step-desc">تواصل معنا على قناة التلغرام و ارسل لنا بنك الدفع و معلوماتك الشخصية</div>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-image-container">
            <Image src={questionmark} alt="علامة استفهام" className="faq-image" />
          </div>
          
          <div className="faq-content">
            <h2 className="faq-title">الأسئلة الشائعة</h2>
            
            <div className="faq-items">
              <div className={`faq-item ${activeFaqItem === 0 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(0)}>
                  <span className="faq-toggle">
                    {activeFaqItem === 0 ? <Image src={ArrowUp} alt="Up Arrow" /> : <Image src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>كيف يمكنني التسجيل في المنصة؟</span>
                </div>
                <div className="faq-answer">
                  <p>يمكنك التسجيل عبر الموقع واختيار طريقة الدفع المناسبة من الخيارات المتاحة.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 1 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(1)}>
                  <span className="faq-toggle">
                    {activeFaqItem === 1 ? <Image src={ArrowUp} alt="Up Arrow" /> : <Image src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>هل يمكنني الوصول للدروس في أي وقت؟</span>
                </div>
                <div className="faq-answer">
                  <p>نعم، يمكنك الوصول للدروس في أي وقت تشاء، المنصة متاحة 24/7.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 2 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(2)}>
                  <span className="faq-toggle">
                    {activeFaqItem === 2 ? <Image src={ArrowUp} alt="Up Arrow" /> : <Image src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>ما هي طرق الدفع المتاحة؟</span>
                </div>
                <div className="faq-answer">
                  <p>نوفر عدة طرق دفع منها البطاقات الائتمانية والتحويل البنكي والدفع الإلكتروني.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 3 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(3)}>
                  <span className="faq-toggle">
                    {activeFaqItem === 3 ? <Image src={ArrowUp} alt="Up Arrow" /> : <Image src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>هل أحصل على شهادة عند إتمام الدورة؟</span>
                </div>
                <div className="faq-answer">
                  <p>نعم، تحصل على شهادة معتمدة عند إتمام الدورة بنجاح واجتياز الاختبارات.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 4 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(4)}>
                  <span className="faq-toggle">
                    {activeFaqItem === 4 ? <Image src={ArrowUp} alt="Up Arrow" /> : <Image src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>هل يتوفر تطبيق خاص بالمنصة؟</span>
                </div>
                <div className="faq-answer">
                  <p>يمكنك التسجيل عبر الموقع واختيار طريقة الدفع المناسبة من الخيارات المتاحة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <Image src={Colad} alt="Quote decoration left" className="quote-decoration-left" />
          <Image src={ColadEnd} alt="Quote decoration right" className="quote-decoration-right" />
          
          <div className="testimonials-title">ماذا يقول مستخدمو منصتنا؟</div>
          
          <div className="testimonials-carousel">
            <div className="testimonials-content">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`testimonial-item ${index === currentTestimonial ? 'active' : ''}`}
                  style={{ display: index === currentTestimonial ? 'block' : 'none' }}
                >
                  <div className="testimonial-content">
                    <Image src={Quotes} alt="اقتباس" className="quote-icon" />
                    <p className="testimonial-text">{testimonial.content}</p>
                    <div className="testimonial-author">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="testimonial-arrow testimonial-arrow-right" onClick={nextTestimonial}>
              <Image src={rightArrow} alt="Next" width="24" height="24" />
            </button>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
            
            <button className="testimonial-arrow testimonial-arrow-left" onClick={prevTestimonial}>
              <Image src={leftArrow} alt="Previous" width="24" height="24" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-container">
          <h2 className="partners-title">شركاؤنا</h2>
          <div className="partners-grid">
            <div className="partner-item">
              <Image src={mdsLogo} alt="MDS" className="partner-logo" />
            </div>
            <div className="partner-item">
              <Image src={ensiaLogo} alt="ENSIA" className="partner-logo" />
            </div>
            <div className="partner-item">
              <Image src={baridLogo} alt="Barid" className="partner-logo" />
            </div>
            <div className="partner-item">
              <Image src={telecommLogo} alt="Telecom" className="partner-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
