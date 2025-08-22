"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaGraduationCap, FaBook, FaMapMarkerAlt } from "react-icons/fa"
import AuthLayout from "../../../components/auth/AuthLayout"
import InputField from "../../../components/ui/InputField"
import Button from "../../../components/ui/Button"
import SelectField from "../../../components/ui/SelectField"
import "../../../assets/styles/Auth.css"

// Define the shape of form data
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  parentPhone: string
  wilaya: string
  educationLevel: string
  studyField: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

// Define the shape of errors
interface Errors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  parentPhone?: string
  wilaya?: string
  educationLevel?: string
  studyField?: string
  password?: string
  confirmPassword?: string
  agreeToTerms?: string
  submit?: string
}

// Define the shape of select options
interface SelectOption {
  value: string
  label: string
}

// Define the shape of the API response
interface ApiResponse {
  success: boolean
  message?: string
}

export default function SignupPage() {
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
  })
  const [errors, setErrors] = useState<Errors>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  // Education levels options in Arabic
  const educationLevels: SelectOption[] = [
    { value: "ثانوي_1", label: "ثانوي السنة الأولى" },
    { value: "ثانوي_2", label: "ثانوي السنة الثانية" },
    { value: "ثانوي_3_باك", label: "ثانوي السنة الثالثة (باك)" },
    { value: "أخرى", label: "أخرى" },
  ]

  // Study fields options
  const studyFields: SelectOption[] = [
    { value: "رياضيات", label: "الرياضيات" },
    { value: "تقني_رياضي", label: "تقني رياضي" },
    { value: "علوم_تجريبية", label: "علوم تجريبية" },
    { value: "آداب_وفلسفة", label: "آداب وفلسفة" },
    { value: "تسيير_اقتصاد", label: "تسيير اقتصاد" },
    { value: "لغات_أجنبية", label: "لغات أجنبية" },
    { value: "أخرى", label: "أخرى" },
  ]

  // Algerian Wilayas (58 provinces)
  const wilayas: SelectOption[] = [
    { value: "01", label: "01 - أدرار" },
    { value: "02", label: "02 - الشلف" },
    { value: "03", label: "03 - الأغواط" },
    { value: "04", label: "04 - أم البواقي" },
    { value: "05", label: "05 - باتنة" },
    { value: "06", label: "06 - بجاية" },
    { value: "07", label: "07 - بسكرة" },
    { value: "08", label: "08 - بشار" },
    { value: "09", label: "09 - البليدة" },
    { value: "10", label: "10 - البويرة" },
    { value: "11", label: "11 - تمنراست" },
    { value: "12", label: "12 - تبسة" },
    { value: "13", label: "13 - تلمسان" },
    { value: "14", label: "14 - تيارت" },
    { value: "15", label: "15 - تيزي وزو" },
    { value: "16", label: "16 - الجزائر" },
    { value: "17", label: "17 - الجلفة" },
    { value: "18", label: "18 - جيجل" },
    { value: "19", label: "19 - سطيف" },
    { value: "20", label: "20 - سعيدة" },
    { value: "21", label: "21 - سكيكدة" },
    { value: "22", label: "22 - سيدي بلعباس" },
    { value: "23", label: "23 - عنابة" },
    { value: "24", label: "24 - قالمة" },
    { value: "25", label: "25 - قسنطينة" },
    { value: "26", label: "26 - المدية" },
    { value: "27", label: "27 - مستغانم" },
    { value: "28", label: "28 - المسيلة" },
    { value: "29", label: "29 - معسكر" },
    { value: "30", label: "30 - ورقلة" },
    { value: "31", label: "31 - وهران" },
    { value: "32", label: "32 - البيض" },
    { value: "33", label: "33 - إليزي" },
    { value: "34", label: "34 - برج بوعريريج" },
    { value: "35", label: "35 - بومرداس" },
    { value: "36", label: "36 - الطارف" },
    { value: "37", label: "37 - تندوف" },
    { value: "38", label: "38 - تيسمسيلت" },
    { value: "39", label: "39 - الوادي" },
    { value: "40", label: "40 - خنشلة" },
    { value: "41", label: "41 - سوق أهراس" },
    { value: "42", label: "42 - تيبازة" },
    { value: "43", label: "43 - ميلة" },
    { value: "44", label: "44 - عين الدفلى" },
    { value: "45", label: "45 - النعامة" },
    { value: "46", label: "46 - عين تموشنت" },
    { value: "47", label: "47 - غرداية" },
    { value: "48", label: "48 - غليزان" },
    { value: "49", label: "49 - تيميمون" },
    { value: "50", label: "50 - برج باجي مختار" },
    { value: "51", label: "51 - أولاد جلال" },
    { value: "52", label: "52 - بني عباس" },
    { value: "53", label: "53 - عين صالح" },
    { value: "54", label: "54 - عين قزام" },
    { value: "55", label: "55 - توقرت" },
    { value: "56", label: "56 - جانت" },
    { value: "57", label: "57 - المغير" },
    { value: "58", label: "58 - المنيعة" },
  ]

  // Fixed handleChange function with proper type handling
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement
    const { name, value, type } = target
    
    // Type assertion for checkbox handling
    const checked = (target as HTMLInputElement).checked
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Errors = {}

    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = "الاسم الأول مطلوب"
    if (!formData.lastName.trim()) newErrors.lastName = "اسم العائلة مطلوب"
    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب"
    else if (!/^\+?\d{9,12}$/.test(formData.phone)) newErrors.phone = "رقم الهاتف غير صحيح"
    if (!formData.parentPhone.trim()) newErrors.parentPhone = "رقم هاتف ولي الأمر مطلوب"
    else if (!/^\+?\d{9,12}$/.test(formData.parentPhone)) newErrors.parentPhone = "رقم هاتف ولي الأمر غير صحيح"
    if (!formData.wilaya) newErrors.wilaya = "الولاية مطلوبة"
    if (!formData.educationLevel) newErrors.educationLevel = "المستوى التعليمي مطلوب"
    if (!formData.studyField) newErrors.studyField = "التخصص مطلوب"
    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 8) {
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمات المرور غير متطابقة"
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "يجب الموافقة على الشروط والأحكام"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          parentPhone: formData.parentPhone,
          wilaya: formData.wilaya,
          educationLevel: formData.educationLevel,
          studyField: formData.studyField,
          password: formData.password,
        }),
      })

      const data: ApiResponse = await response.json()

      if (response.ok) {
        // Store email for verification
        localStorage.setItem("verificationEmail", formData.email)
        // Redirect to verification page
        router.push("/auth/verify-email")
      } else {
        setErrors({ submit: data.message || "حدث خطأ في إنشاء الحساب" })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout
      title="إنشاء حساب جديد"
      subtitle="انضم إلينا وابدأ رحلتك التعليمية"
      pageType="logout"
    >
      <form onSubmit={handleSubmit} className="auth-form signup-form">
        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        {/* Personal Information */}
        <div className="form-section">
          <h3 className="section-title">المعلومات الشخصية</h3>
          <div className="form-row">
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
              placeholder="اسم العائلة"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <InputField
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <div className="form-row">
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
              placeholder="رقم هاتف ولي الأمر"
              value={formData.parentPhone}
              onChange={handleChange}
              error={errors.parentPhone}
            />
          </div>
        </div>

        {/* Location Information */}
        <div className="form-section">
          <h3 className="section-title">
            <FaMapMarkerAlt /> معلومات الموقع
          </h3>
          <SelectField
            name="wilaya"
            placeholder="اختر الولاية"
            value={formData.wilaya}
            onChange={handleChange}
            options={wilayas}
            error={errors.wilaya}
          />
        </div>

        {/* Educational Information */}
        <div className="form-section">
          <h3 className="section-title">
            <FaGraduationCap /> المعلومات التعليمية
          </h3>
          <SelectField
            name="educationLevel"
            placeholder="اختر المستوى التعليمي"
            value={formData.educationLevel}
            onChange={handleChange}
            options={educationLevels}
            error={errors.educationLevel}
          />
          <SelectField
            name="studyField"
            placeholder="اختر التخصص"
            value={formData.studyField}
            onChange={handleChange}
            options={studyFields}
            error={errors.studyField}
            
          />
        </div>

        {/* Password Information */}
        <div className="form-section">
          <h3 className="section-title">كلمة المرور</h3>
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
        </div>

        {/* Terms and Conditions */}
        <div className="form-section">
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className={errors.agreeToTerms ? "error" : ""}
            />
            <label htmlFor="agreeToTerms">
              أوافق على{" "}
              <Link href="/terms" className="terms-link">
                الشروط والأحكام
              </Link>{" "}
              و{" "}
              <Link href="/privacy" className="terms-link">
                سياسة الخصوصية
              </Link>
            </label>
          </div>
          {errors.agreeToTerms && <div className="field-error">{errors.agreeToTerms}</div>}
        </div>

        <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
          {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
        </Button>

        <div className="auth-switch">
          <span>لديك حساب بالفعل؟ </span>
          <Link href="/auth/login" className="auth-switch-link">
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}