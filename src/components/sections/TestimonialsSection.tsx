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
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
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
                className={`testimonial-card ${
                  index === currentTestimonial ? 'active' :
                  index === (currentTestimonial - 1 + testimonials.length) % testimonials.length ? 'prev' :
                  index === (currentTestimonial + 1) % testimonials.length ? 'next' : 'hidden'
                }`}
              >
                <div className="testimonial-quote">
                  <Image src={Quotes} alt="Quote" className="quote-icon" />
                  <p className="testimonial-text">{testimonial.content}</p>
                </div>
                
                {/* Bottom section with divider and author */}
                <div className="testimonial-bottom">
                  {/* Gray divider */}
                  <div style={{width: '100%', height: '1px', background: '#EAEAEA', margin: '1.5rem 0'}}></div>
                  
                  <div className="testimonial-author">
                    <span className="author-name">{testimonial.name}</span>
                    <div className="author-avatar" style={{backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                
                
                
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation container with arrows and dots */}
        <div className="testimonials-navigation">
          <button className="testimonial-arrow testimonial-arrow-right" onClick={prevTestimonial}>
            <Image src={rightArrow} alt="Previous" width="24" height="24" />
          </button>
          
          <div className="testimonials-dots">
            {testimonials.slice().reverse().map((_, reverseIndex) => {
              const index = testimonials.length - 1 - reverseIndex;
              return (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              );
            })}
          </div>
          
          <button className="testimonial-arrow testimonial-arrow-left" onClick={nextTestimonial}>
            <Image src={leftArrow} alt="Next" width="24" height="24" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;