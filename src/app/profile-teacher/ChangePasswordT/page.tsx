'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import '../../../assets/styles/ChangePasswordT.css';

interface FormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface Messages {
  success: string;
  error: string;
}

const ChangePasswordFormT: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [messages, setMessages] = useState<Messages>({
    success: '',
    error: ''
  });
  
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // مسح الرسائل عند تغيير المدخلات
    if (messages.success || messages.error) {
      setMessages({ success: '', error: '' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    
    // التحقق من تطابق كلمات المرور
    if (formData.newPassword !== formData.confirmPassword) {
      setMessages({
        success: '',
        error: 'كلمات المرور الجديدة غير متطابقة'
      });
      setIsLoading(false);
      return;
    }
    
    // التحقق من قوة كلمة المرور
    if (formData.newPassword.length < 8) {
      setMessages({
        success: '',
        error: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'
      });
      setIsLoading(false);
      return;
    }

    // التحقق من أن كلمة المرور الجديدة مختلفة عن القديمة
    if (formData.currentPassword === formData.newPassword) {
      setMessages({
        success: '',
        error: 'كلمة المرور الجديدة يجب أن تكون مختلفة عن الحالية'
      });
      setIsLoading(false);
      return;
    }
    
    // محاكاة API call
    try {
      setTimeout(() => {
        setMessages({
          success: 'تم تغيير كلمة المرور بنجاح!',
          error: ''
        });
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setIsLoading(false);
        
        // إخفاء رسالة النجاح بعد 3 ثوان
        setTimeout(() => {
          setMessages(prev => ({ ...prev, success: '' }));
        }, 3000);
      }, 1000);
    } catch  {
      setMessages({
        success: '',
        error: 'حدث خطأ أثناء تغيير كلمة المرور'
      });
      setIsLoading(false);
    }
  };



  const handleEditProfile = (): void => {
    alert('الانتقال إلى صفحة تعديل الملف الشخصي');
  };

  return (
    <div className="change-password-container">
      <div className="header">
        <h1 className="page-title">تغيير كلمة المرور</h1>
        
      </div>

      <div className="password-form">
        {messages.success && (
          <div className="success-message">
            <span className="message-icon">✅</span>
            <span>{messages.success}</span>
          </div>
        )}
        
        {messages.error && (
          <div className="error-message">
            <span className="message-icon">❌</span>
            <span>{messages.error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <input 
                type="password" 
                className="form-input" 
                placeholder="أدخل كلمة المرور الحالية"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                required
              />
              <div className="input-icon">🔒</div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <input 
                type="password" 
                className="form-input" 
                placeholder="أدخل كلمة المرور الجديدة"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
                minLength={8}
              />
              <div className="input-icon">🔒</div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <input 
                type="password" 
                className="form-input" 
                placeholder="تأكيد كلمة المرور"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <div className="input-icon">🔒</div>
            </div>
          </div>

          <button 
            type="submit" 
            className={`save-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'جار الحفظ...' : 'حفظ'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordFormT;