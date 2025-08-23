'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '../../../assets/styles/SettingsT.css';

const SettingsT: React.FC = () => {
  const router = useRouter();

  const handleChangePassword = (): void => {
    router.push('ChangePassword');
  };

  const handleDeleteAccount = (): void => {
    router.push('DeleteAccount'); // Navigate to delete account page
  };

  const handleDeviceClick = (deviceName: string): void => {
    alert(`تفاصيل جهاز: ${deviceName}`);
    // يمكنك هنا إضافة المنطق لعرض تفاصيل الجهاز
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">الإعدادات</h1>
      
      <div className="settings-section">
        <div className="settings-item" onClick={handleChangePassword}>
          <div className="settings-item-content">
            <div className="settings-item-title">تغيير كلمة المرور</div>
            <div className="settings-item-description">قم بتحديث كلمة المرور الخاصة بك</div>
          </div>
          <span className="arrow">←</span>
        </div>
      </div>

      <div className="devices-section">
        <h2 className="devices-title">الأجهزة النشطة</h2>
        
        <div className="device-item" onClick={() => handleDeviceClick('Windows')}>
          <div className="device-icon">🖥️</div>
          <div className="device-info">
            <div className="device-name">Windows</div>
            <div className="device-details">أول جهاز نشط</div>
          </div>
          <div className="device-status">نشط حالياً</div>
        </div>
        
        <div className="device-item" onClick={() => handleDeviceClick('Android')}>
          <div className="device-icon">📱</div>
          <div className="device-info">
            <div className="device-name">Android</div>
            <div className="device-details">الجهاز الثاني</div>
          </div>
          <div className="device-status">نشط</div>
        </div>
        
        <div className="last-seen">
          آخر ظهور 10:32 - 2026 مايو 24 - آخر تحديث: الآن
        </div>
      </div>

      <div className="danger-zone">
        <div className="settings-item danger-item" onClick={handleDeleteAccount}>
          <div className="settings-item-content">
            <div className="settings-item-title">حذف الحساب</div>
            <div className="settings-item-description">حذف الحساب نهائياً مع جميع البيانات</div>
          </div>
          <span className="arrow">←</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsT;