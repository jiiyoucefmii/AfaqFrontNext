
"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGraduationCap, FaBook, FaMapMarkerAlt } from "react-icons/fa";
import AuthLayout from "../../../components/auth/AuthLayout";
import InputField from "../../../components/ui/InputField";
import Button from "../../../components/ui/Button";
import "../../../assets/styles/Auth.css";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

// Define interfaces for form data and errors
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  parentPhone: string;
  wilaya: string;
  educationLevel: string;
  studyField: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  [key: string]: string | undefined;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  parentPhone?: string;
  wilaya?: string;
  educationLevel?: string;
  studyField?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
  submit?: string;
}

interface Option {
  value: string;
  label: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    parentPhone: "",
    wilaya: "",
    educationLevel: "",
    studyField: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // Education levels options in Arabic
  const educationLevels: Option[] = [
    { value: "ثانوي_1", label: "ثانوي السنة الأولى" },
    { value: "ثانوي_2", label: "ثانوي السنة الثانية" },
    { value: "ثانوي_3_باك", label: "ثانوي السنة الثالثة (باك)" },
    { value: "أخرى", label: "أخرى" },
  ];

  // Study fields options
  const studyFields: Option[] = [
    { value: "رياضيات", label: "الرياضيات" },
    { value: "تقني_رياضي", label: "تقني رياضي" },
    { value: "علوم_تجريبية", label: "علوم تجريبية" },
    { value: "آداب_وفلسفة", label: "آداب وفلسفة" },
    { value: "تسيير_اقتصاد", label: "تسيير اقتصاد" },
    { value: "لغات_أجنبية", label: "لغات أجنبية" },
    { value: "أخرى", label: "أخرى" },
  ];

  // Algerian Wilayas (58 provinces)
  const wilayas: Option[] = [
    { value: "01", label: "أدرار" },
    { value: "02", label: "الشلف" },
    { value: "03", label: "الأغواط" },
    { value: "04", label: "أم البواقي" },
    { value: "05", label: "باتنة" },
    { value: "06", label: "بجاية" },
    { value: "07", label: "بسكرة" },
    { value: "08", label: "بشار" },
    { value: "09", label: "البليدة" },
    { value: "10", label: "البويرة" },
    { value: "11", label: "تمنراست" },
    { value: "12", label: "تبسة" },
    { value: "13", label: "تلمسان" },
    { value: "14", label: "تيارت" },
    { value: "15", label: "تيزي وزو" },
    { value: "16", label: "الجزائر" },
    { value: "17", label: "الجلفة" },
    { value: "18", label: "جيجل" },
    { value: "19", label: "سطيف" },
    { value: "20", label: "سعيدة" },
    { value: "21", label: "سكيكدة" },
    { value: "22", label: "سيدي بلعباس" },
    { value: "23", label: "عنابة" },
    { value: "24", label: "قالمة" },
    { value: "25", label: "قسنطينة" },
    { value: "26", label: "المدية" },
    { value: "27", label: "مستغانم" },
    { value: "28", label: "المسيلة" },
    { value: "29", label: "معسكر" },
    { value: "30", label: "ورقلة" },
    { value: "31", label: "وهران" },
    { value: "32", label: "البيض" },
    { value: "33", label: "إليزي" },
    { value: "34", label: "برج بوعريريج" },
    { value: "35", label: "بومرداس" },
    { value: "36", label: "الطارف" },
    { value: "37", label: "تندوف" },
    { value: "38", label: "تيسمسيلت" },
    { value: "39", label: "الوادي" },
    { value: "40", label: "خنشلة" },
    { value: "41", label: "سوق أهراس" },
    { value: "42", label: "تيبازة" },
    { value: "43", label: "ميلة" },
    { value: "44", label: "عين الدفلى" },
    { value: "45", label: "النعامة" },
    { value: "46", label: "عين تموشنت" },
    { value: "47", label: "غرداية" },
    { value: "48", label: "غليزان" },
    { value: "49", label: "تيميمون" },
    { value: "50", label: "برج باجي مختار" },
    { value: "51", label: "أولاد جلال" },
    { value: "52", label: "بني عباس" },
    { value: "53", label: "عين صالح" },
    { value: "54", label: "عين قزام" },
    { value: "55", label: "تقرت" },
    { value: "56", label: "جانت" },
    { value: "57", label: "المغير" },
    { value: "58", label: "المنيعة" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Helper functions for validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Algerian phone number validation (basic)
    const phoneRegex = /^(0[5-7])[0-9]{8}$/;
    return phoneRegex.test(phone);
  };

  interface PasswordValidation {
    isValid: boolean;
    minLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumbers: boolean;
  }

  const validatePassword = (password: string): PasswordValidation => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    return {
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers,
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
    };
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "الاسم الأول مطلوب";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "الاسم الأول يجب أن يكون حرفين على الأقل";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "اللقب مطلوب";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "اللقب يجب أن يكون حرفين على الأقل";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "رقم الهاتف غير صحيح";
    }

    // Parent phone validation (optional)
    if (formData.parentPhone && !validatePhone(formData.parentPhone)) {
      newErrors.parentPhone = "رقم هاتف ولي الأمر غير صحيح";
    }

    // Wilaya validation
    if (!formData.wilaya) {
      newErrors.wilaya = "الولاية مطلوبة";
    }

    // Education level validation
    if (!formData.educationLevel) {
      newErrors.educationLevel = "المستوى التعليمي مطلوب";
    }

    // Study field validation
    if (!formData.studyField) {
      newErrors.studyField = "التخصص الدراسي مطلوب";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        newErrors.password = "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، ورقم";
      }
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة";
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "يجب الموافقة على الشروط والأحكام";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate signup process (replace with your actual API call)
      // For demonstration purposes, we'll simulate a successful signup

      // Uncomment and modify this section when you have your actual API
      /*
      // Check if user already exists
      const userCheck = await databaseAPI.checkUserExists(formData.email)
      if (userCheck.exists) {
        setErrors({ submit: "البريد الإلكتروني مسجل بالفعل" })
        setIsLoading(false)
        return
      }

      // Register user in database
      const result = await databaseAPI.signup(formData)

      if (result.success) {
        // Store user data and token
        localStorage.setItem("token", result.token)
        localStorage.setItem("user", JSON.stringify(result.user))

        // Redirect to landing page
        router.replace("/")
      } else {
        setErrors({ submit: result.message })
      }
      */

      // Temporary simulation - remove this when you implement actual signup
      setTimeout(() => {
        // Simulate successful signup
        const mockUser = {
          id: Date.now(), // Simple ID generation
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          wilaya: formData.wilaya,
          educationLevel: formData.educationLevel,
          studyField: formData.studyField,
        };
        const mockToken = "mock-jwt-token-" + Date.now();

        // Store mock data
        localStorage.setItem("token", mockToken);
        localStorage.setItem("user", JSON.stringify(mockUser));

        // Redirect to landing page (root path)
        router.replace("/");
      }, 1500); // Slightly longer delay to simulate signup process
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" });
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <AuthLayout
        title="أنشئ حسابك الآن"
        subtitle="ادخل بياناتك بشكل صحيح للحصول على أفضل تجربة داخل الموقع"
      >
        <form onSubmit={handleSubmit} className="auth-form">
          {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

          {/* Row 1: First Name & Last Name */}
          <div className="name-fields">
            <InputField
              type="text"
              name="firstName"
              placeholder="الاسم الأول"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="اللقب"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>

          {/* Row 2: Email alone */}
          <InputField
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* Row 3: Phone & Parent Phone */}
          <div className="phone-fields">
            <InputField
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <InputField
              type="tel"
              name="parentPhone"
              placeholder="رقم هاتف ولي الأمر (اختياري)"
              value={formData.parentPhone}
              onChange={handleChange}
              error={errors.parentPhone}
            />
          </div>

          {/* Row 4: Wilaya */}
          <div className="select-field">
            <div className="select-wrapper">
              <select
                name="wilaya"
                value={formData.wilaya}
                onChange={handleChange}
                className={`select ${errors.wilaya ? "error" : ""}`}
              >
                <option value="" disabled>
                  اختر الولاية
                </option>
                {wilayas.map((wilaya) => (
                  <option key={wilaya.value} value={wilaya.value}>
                    {wilaya.label}
                  </option>
                ))}
              </select>
              <span className="select-arrow">▼</span>
              <FaMapMarkerAlt className="select-icon" />
            </div>
            {errors.wilaya && <span className="error-text">{errors.wilaya}</span>}
          </div>

          {/* Row 5: Education Level & Study Field */}
          <div className="education-fields">
            <div className="select-field">
              <div className="select-wrapper">
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className={`select ${errors.educationLevel ? "error" : ""}`}
                >
                  <option value="" disabled>
                    المستوى التعليمي
                  </option>
                  {educationLevels.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="select-arrow">▼</span>
                <FaGraduationCap className="select-icon" />
              </div>
              {errors.educationLevel && <span className="error-text">{errors.educationLevel}</span>}
            </div>

            <div className="select-field">
              <div className="select-wrapper">
                <select
                  name="studyField"
                  value={formData.studyField}
                  onChange={handleChange}
                  className={`select ${errors.studyField ? "error" : ""}`}
                >
                  <option value="" disabled>
                    اختر الشعبة الدراسية
                  </option>
                  {studyFields.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="select-arrow">▼</span>
                <FaBook className="select-icon" />
              </div>
              {errors.studyField && <span className="error-text">{errors.studyField}</span>}
            </div>
          </div>

          <InputField
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <InputField
            type="password"
            name="confirmPassword"
            placeholder="تأكيد كلمة المرور"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <div className="checkbox-field">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                أوافق على{" "}
                <Link href="/terms" className="terms-link">
                  الشروط والأحكام
                </Link>{" "}
                و{" "}
                <Link href="/privacy" className="terms-link">
                  سياسة الخصوصية
                </Link>
              </span>
            </label>
            {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}
          </div>

          <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
            {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
          </Button>

          <div className="auth-switch">
            <span>لديك حساب بالفعل؟ </span>
            <Link href="/login" className="auth-switch-link">
              تسجيل الدخول
            </Link>
          </div>
        </form>
      </AuthLayout>
      <Footer />
    </div>
  );
};

export default Signup;
