'use client';
import React, { useState, ChangeEvent } from 'react';
import { Camera, Edit3, Save, X } from 'lucide-react';
import '@/assets/styles/ProfileS.css';

interface Option {
  value: string;
  label: string;
}

const educationLevels: Option[] = [
  { value: 'ثانوي_1', label: 'ثانوي السنة الأولى' },
  { value: 'ثانوي_2', label: 'ثانوي السنة الثانية' },
  { value: 'ثانوي_3_باك', label: 'ثانوي السنة الثالثة (باك)' },
  { value: 'أخرى', label: 'أخرى' },
];

const studyFields: Option[] = [
  { value: 'رياضيات', label: 'الرياضيات' },
  { value: 'تقني_رياضي', label: 'تقني رياضي' },
  { value: 'علوم_تجريبية', label: 'علوم تجريبية' },
  { value: 'آداب_وفلسفة', label: 'آداب وفلسفة' },
  { value: 'تسيير_اقتصاد', label: 'تسيير اقتصاد' },
  { value: 'لغات_أجنبية', label: 'لغات أجنبية' },
  { value: 'أخرى', label: 'أخرى' },
];

const wilayas: Option[] = [
  { value: '01', label: 'أدرار' },
  { value: '02', label: 'الشلف' },
  { value: '03', label: 'الأغواط' },
  { value: '04', label: 'أم البواقي' },
  { value: '05', label: 'باتنة' },
  { value: '06', label: 'بجاية' },
  { value: '07', label: 'بسكرة' },
  { value: '08', label: 'بشار' },
  { value: '09', label: 'البليدة' },
  { value: '10', label: 'البويرة' },
  { value: '11', label: 'تمنراست' },
  { value: '12', label: 'تبسة' },
  { value: '13', label: 'تلمسان' },
  { value: '14', label: 'تيارت' },
  { value: '15', label: 'تيزي وزو' },
  { value: '16', label: 'الجزائر' },
  { value: '17', label: 'الجلفة' },
  { value: '18', label: 'جيجل' },
  { value: '19', label: 'سطيف' },
  { value: '20', label: 'سعيدة' },
  { value: '21', label: 'سكيكدة' },
  { value: '22', label: 'سيدي بلعباس' },
  { value: '23', label: 'عنابة' },
  { value: '24', label: 'قالمة' },
  { value: '25', label: 'قسنطينة' },
  { value: '26', label: 'المدية' },
  { value: '27', label: 'مستغانم' },
  { value: '28', label: 'المسيلة' },
  { value: '29', label: 'معسكر' },
  { value: '30', label: 'ورقلة' },
  { value: '31', label: 'وهران' },
  { value: '32', label: 'البيض' },
  { value: '33', label: 'إليزي' },
  { value: '34', label: 'برج بوعريريج' },
  { value: '35', label: 'بومرداس' },
  { value: '36', label: 'الطارف' },
  { value: '37', label: 'تندوف' },
  { value: '38', label: 'تيسمسيلت' },
  { value: '39', label: 'الوادي' },
  { value: '40', label: 'خنشلة' },
  { value: '41', label: 'سوق أهراس' },
  { value: '42', label: 'تيبازة' },
  { value: '43', label: 'ميلة' },
  { value: '44', label: 'عين الدفلى' },
  { value: '45', label: 'النعامة' },
  { value: '46', label: 'عين تموشنت' },
  { value: '47', label: 'غرداية' },
  { value: '48', label: 'غليزان' },
  { value: '49', label: 'تيميمون' },
  { value: '50', label: 'برج باجي مختار' },
  { value: '51', label: 'أولاد جلال' },
  { value: '52', label: 'بني عباس' },
  { value: '53', label: 'عين صالح' },
  { value: '54', label: 'عين قزام' },
  { value: '55', label: 'تقرت' },
  { value: '56', label: 'جانت' },
  { value: '57', label: 'المغير' },
  { value: '58', label: 'المنيعة' },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  parentPhoneNumber: string;
  wilaya: string;
  specialization: string;
  educationLevel: string;
}

const ProfileForm: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: 'أحمد',
    lastName: 'محمد',
    email: 'ahmed.mohamed@example.com',
    phoneNumber: '0555123456',
    parentPhoneNumber: '0555654321',
    wilaya: '16',
    specialization: 'رياضيات',
    educationLevel: 'ثانوي_3_باك',
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Profile updated:', formData);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed (e.g., revert to initial state)
  };

  const getWilayaLabel = (value: string): string => {
    return wilayas.find((w) => w.value === value)?.label || value;
  };

  const getEducationLabel = (value: string): string => {
    return educationLevels.find((e) => e.value === value)?.label || value;
  };

  const getSpecializationLabel = (value: string): string => {
    return studyFields.find((s) => s.value === value)?.label || value;
  };

  return (
    
   
      <div className="profile-container">
        <div className="profile-header">

        <h1 className="profile-title">الملف الشخصي</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="edit-button"
            aria-label="Edit Profile"
          >
            <Edit3 size={16} />
            تعديل الملف الشخصي
          </button>
        ) : (
          <div className="button-group">
            <button onClick={handleSave} className="save-button" aria-label="Save Profile">
              <Save size={16} />
              حفظ
            </button>
            <button onClick={handleCancel} className="cancel-button" aria-label="Cancel Editing">
              <X size={16} />
              إلغاء
            </button>
          </div>
        )}
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-content">
          {/* Profile Picture */}
          <div className="profile-picture-container">
            <div className="profile-picture">
              {profileImage ? (
                <img src={profileImage} alt="Profile" />
              ) : (
                <div className="profile-picture-placeholder" />
              )}
            </div>
            {isEditing && (
              <label htmlFor="profile-upload" className="camera-button">
                <Camera size={16} className="text-gray-600" />
              </label>
            )}
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="profile-picture-upload"
              aria-hidden={!isEditing}
            />
            <div className="profile-picture-label">
              <span className="profile-picture-text">صورة شخصية</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="form-fields">
            <div className="form-grid-2">
              {/* First Name */}
              <div>
                <label className="form-label">الاسم الأول</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                ) : (
                  <div className="form-display">{formData.firstName}</div>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="form-label">اللقب</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                ) : (
                  <div className="form-display">{formData.lastName}</div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">البريد الإلكتروني</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input email-field"
                />
              ) : (
                <div className="form-display email-field">{formData.email}</div>
              )}
            </div>

            <div className="form-grid-2 form-group">
              {/* Phone Number */}
              <div>
                <label className="form-label">رقم الهاتف</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                ) : (
                  <div className="form-display">{formData.phoneNumber}</div>
                )}
              </div>

              {/* Parent Phone Number */}
              <div>
                <label className="form-label">رقم هاتف ولي الأمر</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="parentPhoneNumber"
                    value={formData.parentPhoneNumber}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                ) : (
                  <div className="form-display">{formData.parentPhoneNumber}</div>
                )}
              </div>
            </div>

            {/* Wilaya */}
            <div className="form-group">
              <label className="form-label">الولاية</label>
              {isEditing ? (
                <select
                  name="wilaya"
                  value={formData.wilaya}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  {wilayas.map((wilaya) => (
                    <option key={wilaya.value} value={wilaya.value}>
                      {wilaya.label}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="form-display">{getWilayaLabel(formData.wilaya)}</div>
              )}
            </div>

            <div className="form-grid-2 form-group">
              {/* Specialization */}
              <div>
                <label className="form-label">التخصص الدراسي</label>
                {isEditing ? (
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {studyFields.map((field) => (
                      <option key={field.value} value={field.value}>
                        {field.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="form-display">{getSpecializationLabel(formData.specialization)}</div>
                )}
              </div>

              {/* Education Level */}
              <div>
                <label className="form-label">المستوى التعليمي</label>
                {isEditing ? (
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {educationLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="form-display">{getEducationLabel(formData.educationLevel)}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Last Update */}
        <div className="last-update">آخر تعديل دخول: 15-01-2024 14:30</div>
      </div>
    </div>

   
  );
};

export default ProfileForm;