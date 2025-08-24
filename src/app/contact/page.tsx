'use client'

import { useState } from "react";
import "../../assets/styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="contact-page">
      <div className="background-shapes">
        <svg className="shape-1" viewBox="0 0 639 735" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_4124_3293)">
            <path d="M32.5252 27H759.475C780.47 176.678 577.74 212.669 577.74 363.5C577.74 514.331 780.47 550.321 759.475 700H32.5252C11.5287 550.321 214.261 514.331 214.261 363.5C214.261 212.669 11.5287 176.678 32.5252 27Z" fill="url(#paint0_linear_4124_3293)"/>
          </g>
          <g filter="url(#filter1_d_4124_3293)">
            <path d="M129.525 27H856.475C877.47 176.678 674.74 212.669 674.74 363.5C674.74 514.331 877.47 550.321 856.475 700H129.525C108.529 550.321 311.261 514.331 311.261 363.5C311.261 212.669 108.529 176.678 129.525 27Z" fill="url(#paint1_linear_4124_3293)"/>
          </g>
          <g filter="url(#filter2_d_4124_3293)">
            <path d="M261.523 27H987.477C1008.44 176.678 805.991 212.669 805.991 363.5C805.991 514.331 1008.44 550.321 987.477 700H261.523C240.555 550.321 443.01 514.331 443.01 363.5C443.01 212.669 240.555 176.678 261.523 27Z" fill="url(#paint2_linear_4124_3293)"/>
          </g>
          <defs>
            <filter id="filter0_d_4124_3293" x="0" y="0" width="792" height="735" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="15.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.952885 0 0 0 0 0.952885 0 0 0 0 0.952885 0 0 0 0.67 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4124_3293"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4124_3293" result="shape"/>
            </filter>
            <filter id="filter1_d_4124_3293" x="97" y="0" width="792" height="735" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="15.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.952885 0 0 0 0 0.952885 0 0 0 0 0.952885 0 0 0 0.67 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4124_3293"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4124_3293" result="shape"/>
            </filter>
            <filter id="filter2_d_4124_3293" x="229" y="0" width="791" height="735" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="15.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.952885 0 0 0 0 0.952885 0 0 0 0 0.952885 0 0 0 0.67 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4124_3293"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4124_3293" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_4124_3293" x1="733.819" y1="401.07" x2="118.872" y2="695.61" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCC00"/>
              <stop offset="1" stopColor="#FDF5D5"/>
            </linearGradient>
            <linearGradient id="paint1_linear_4124_3293" x1="493" y1="27" x2="493" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCC00"/>
              <stop offset="1" stopColor="#FFEA95"/>
            </linearGradient>
            <linearGradient id="paint2_linear_4124_3293" x1="624.5" y1="27" x2="624.5" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFBF00"/>
              <stop offset="1" stopColor="#FFEA95"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <div className="contact-info-section">
          <div className="contact-circle">
            <div className="contact-item">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#00052B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-text">+213 779 72 68 23</div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00052B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="#00052B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-text">afaqacademie@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h1 className="main-title">تواصلو معنا</h1>
          <p className="subtitle">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في أي وقت. لا تتردد في التواصل معنا!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="الاسم الكامل"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="رسالتك"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}