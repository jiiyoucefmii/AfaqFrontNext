import React, { useState } from 'react';
import Image from 'next/image';
import Colad from '../../assets/images/colad.svg';
import ColadEnd from '../../assets/images/coladend.svg';
import Quotes from '../../assets/images/Quotes.svg';
import leftArrow from '../../assets/images/leftarrow.svg';
import rightArrow from '../../assets/images/rightarrow.svg';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <Image src={Colad} alt="Quote decoration left" className="quote-decoration-left" />
        <Image src={ColadEnd} alt="Quote decoration right" className="quote-decoration-right" />
        
        <div className="testimonials-title">ماذا يقول مستخدمو منصتنا؟</div>
        
        <div className="testimonials-carousel">
          <div className="testimonials-content">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
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
  );
};

export default TestimonialsSection;