'use client'

import React from 'react'
import Image from 'next/image'

const HeroSection: React.FC = () => {
  const handleVideoClick = () => {
    // Add video play functionality here
    console.log('Video placeholder clicked');
  };

  return (
    <div className="hero-section">
      <div className="hero-upper">
        <div className="hero-text">
          <h1 className='hero-title'>
            منصة <span className='highlight-yellow'>آفاق</span> التعليمية
          </h1>
          <p className="hero-subtext">
            الخبير في كل شيء كان مبتدئاً في يوم ما
          </p>
        </div>
        <div className="hero-image">
          <Image 
            src="/images/yellowHero.png"
            alt="آفاق التعليمية" 
            className="yellow-hero"
            width={1200}
            height={300}
            priority
            sizes="(max-width: 480px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1200px"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      
      <div className="hero-lower">
        <div className="mockup-container">
          <div className="mockup-image">
            <Image 
              src="/images/MockupPC.png"
              alt="جهاز كمبيوتر يعرض منصة آفاق" 
              className="mockup-pc"
              width={719}
              height={479}
              sizes="(max-width: 480px) 95vw, (max-width: 768px) 500px, (max-width: 1024px) 600px, 719px"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            
            {/* Video Placeholder positioned beneath mockup with lower z-index */}
            <div className="video-placeholder" onClick={handleVideoClick}>
              <div className="play-button">
                <div className="play-icon"></div>
              </div>
              <div className="video-text">
                <div className="video-title">شاهد كيف تعمل منصة آفاق</div>
                <div className="video-duration">2:30 دقيقة</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-content">
          <h2>منصة آفاق - تعلم عن بُعد بأسلوب مبتكر</h2>
          <p>
            منصة آفاق توفر تجربة تعليمية شاملة ومرنة عبر الإنترنت، 
            تجمع بين المتعة والفعالية لتساعدك على التعلم بسهولة 
            وفي الوقت والمكان الذي يناسبك.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection