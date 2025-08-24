'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import '../../../assets/styles/DeleteAccountT.css';

const DeleteAccountT: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const router = useRouter();

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  const handleConfirmationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsConfirmed(e.target.checked);
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const handleCancel = (): void => {
    router.back(); // العودة للصفحة السابقة
  };

  const handleDeleteAccount = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!password.trim()) {
      setError('يرجى إدخال كلمة المرور');
      return;
    }

    if (!isConfirmed) {
      setError('يرجى تأكيد رغبتك في حذف الحساب');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // هنا يمكنك إضافة API call لحذف الحساب
      // const response = await deleteAccountAPI(password);
      
      // محاكاة API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // في حالة نجح الحذف
      alert('تم حذف الحساب بنجاح');
      router.push('/login'); // التوجه لصفحة تسجيل الدخول
      
    } catch {
      setError('كلمة المرور غير صحيحة أو حدث خطأ في الخادم');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="delete-account-container">
      <div className="delete-account-card">
        <div className="delete-account-header">
          <h1 className="delete-account-title">حذف الحساب</h1>
          <p className="delete-account-subtitle">
            هذا الإجراء لا يمكن التراجع عنه. سيتم حذف جميع بياناتك نهائياً
          </p>
        </div>

        <form onSubmit={handleDeleteAccount} className="delete-account-form">
          <div className="form-group">
            <label className="form-label">كلمة المرور الحالية</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="أدخل كلمة المرور الحالية"
                className={`form-input ${error ? 'error' : ''}`}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
                disabled={isLoading}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="confirmation-group">
            <label className="confirmation-checkbox">
              <input
                type="checkbox"
                checked={isConfirmed}
                onChange={handleConfirmationChange}
                disabled={isLoading}
              />
              <span className="checkmark"></span>
              <span className="confirmation-text">
                أؤكد أنني مسؤول عن حذف حسابي وأفهم أن هذا الإجراء لا يمكن التراجع عنه
              </span>
            </label>
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <div className="warning-box">
            <div className="warning-header">
              <span className="warning-icon">⚠️</span>
              <strong>تحذير مهم</strong>
            </div>
            <ul className="warning-list">
              <li>سيتم حذف جميع بياناتك الشخصية نهائياً</li>
              <li>سيتم حذف جميع المحادثات والرسائل</li>
              <li>لن تتمكن من استرداد حسابك بعد الحذف</li>
              <li>سيتم إلغاء جميع الاشتراكات المرتبطة بحسابك</li>
            </ul>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="btn-cancel"
              disabled={isLoading}
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="btn-delete"
              disabled={isLoading || !password.trim() || !isConfirmed}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  جاري الحذف...
                </>
              ) : (
                'حذف الحساب نهائياً'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccountT;