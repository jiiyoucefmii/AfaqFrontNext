"use client";

import React from "react";
import Link from "next/link";
import "../../assets/styles/payment.css"; // import the CSS file

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">طريقة دفع مستحقات الدورة</h1>
        
        <div className="divider"></div>

        <p className="payment-description">
          تابع أخطوات التالية لتسجيلك بسهولة والوصول إلى دورتك التعليمية:
        </p>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              اختر الدورة التي تناسبك واضغط على <span className="highlight">الاشتراك في الدورة</span>.
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              تواصل معنا على حساباتنا الرسمية:
              <div className="contact-platforms">
                <a href="https://t.me/afaqacademie" target="_blank" rel="noopener noreferrer" className="platform">
                  <svg className="platform-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M16.539,8.306c0.184,1.791-0.532,3.146-0.767,3.469c-0.53,0.719-1.613,1.381-1.613,1.381s0.153,1.928-0.531,1.928c-0.685,0-3.063-0.92-4.472-2.252c-1.409-1.332-2.173-3.185-2.173-3.185s-1.286,0.511-1.286-0.613c0-1.125,1.286-1.125,1.286-1.125s1.716-0.051,2.561,0.051c0.844,0.102,1.535-0.613,1.535-0.613s2.561,2.969,3.063,3.367c0.502,0.398,1.197,0.255,1.197,0.255L16.539,8.306z"/>
                  </svg>
                  <span>تلغرام</span>
                </a>
                <a href="https://www.instagram.com/afaqacademie?igsh=ZHZ3YzRuZW96bWU4" target="_blank" rel="noopener noreferrer" className="platform">
                  <svg className="platform-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M17,15.5c-0.2,0.3-0.6,0.5-1,0.5c-0.3,0-0.6-0.1-0.9-0.3l-0.1-0.1c-0.5-0.3-1.2-0.6-2-0.6c-0.8,0-1.5,0.3-2,0.6C10.6,16,10.3,16,10,16c-0.4,0-0.8-0.2-1-0.5C8.8,15.2,8.8,14.8,9,14.5l1.5-2.5C10.5,12,10.5,12,10.5,12c0-0.6,0.4-1,1-1s1,0.4,1,1c0,0,0,0,0,0l0.5,0.9l1.5-2.5c0.2-0.3,0.6-0.5,1-0.5c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.7,0,1l-1.5,2.5C14.5,12,14.5,12,14.5,12c0,0.6,0.4,1,1,1s1-0.4,1-1c0,0,0,0,0,0l0.5-0.9l1.5,2.5C17.2,14.8,17.2,15.2,17,15.5z"/>
                  </svg>
                  <span>انستغرام</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              أرسل إلينا المعلومات التالية:
              <ul className="info-list">
                <li>الاسم الكامل</li>
                <li>البريد الإلكتروني</li>
                <li>اسم الدورة</li>
              </ul>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              بعد تأكيد الدفع، ستتمكن من الوصول إلى الدورة على الموقع بكل سهولة.
            </div>
          </div>
        </div>

        <div className="button-container">
          <Link href="/" className="button">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;