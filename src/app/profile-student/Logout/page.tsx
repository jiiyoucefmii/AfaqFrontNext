'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../../assets/styles/Logout.css';

const Logout: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogout = async (): Promise<void> => {
    setIsLoading(true);
    
    try {
      // محاكاة API call لتسجيل الخروج
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // مسح البيانات المحفوظة (tokens, user data, etc.)
      // localStorage.removeItem('authToken');
      // sessionStorage.clear();
      
      // التوجه لصفحة تسجيل الدخول
      router.push('/login');
      
    } catch (error) {
      console.error('خطأ في تسجيل الخروج:', error);
      setIsLoading(false);
    }
  };

  const handleCancel = (): void => {
    router.back(); // العودة للصفحة السابقة
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-icon">
          <div className="logout-symbol">
            <span>👋</span>
          </div>
        </div>

        <div className="logout-content">
          <h1 className="logout-title">تسجيل الخروج</h1>
          <p className="logout-message">
            هل أنت متأكد من رغبتك في تسجيل الخروج من حسابك؟
          </p>
          <p className="logout-submessage">
            ستحتاج لإعادة تسجيل الدخول للوصول إلى حسابك مرة أخرى
          </p>
        </div>

        <div className="logout-actions">
          <button 
            className="btn-cancel"
            onClick={handleCancel}
            disabled={isLoading}
          >
            إلغاء
          </button>
          <button 
            className="btn-logout"
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                جاري تسجيل الخروج...
              </>
            ) : (
              <>
                <span className="logout-btn-icon">🚪</span>
                تسجيل الخروج
              </>
            )}
          </button>
        </div>

        <div className="logout-footer">
          <p className="footer-text">
            سيتم الحفاظ على بياناتك وستجدها عند تسجيل الدخول مرة أخرى
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;