"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AuthLayout from "./AuthLayout"
import InputField from "../ui/InputField"
import SelectField from "../ui/SelectField"
import Button from "../ui/Button"
import "../../assets/styles/Auth.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const userTypeOptions = [
    { value: "student", label: "طالب" },
    { value: "teacher", label: "معلم" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName) newErrors.firstName = "الاسم الأول مطلوب"
    if (!formData.lastName) newErrors.lastName = "الاسم الأخير مطلوب"
    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب"
    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة"
    }
    if (!formData.userType) newErrors.userType = "نوع المستخدم مطلوب"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Simulate API call - replace with your actual API
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Redirect to email verification
        router.push("/auth/verify-email")
      } else {
        setErrors({ submit: result.message })
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
      subtitle="أنشئ حسابك الجديد لتتمكن من الوصول إلى جميع الميزات"
      bannerText="انضم إلينا الآن"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

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
            placeholder="الاسم الأخير"
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

        <InputField
          type="tel"
          name="phone"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <SelectField
          name="userType"
          placeholder="اختر نوع المستخدم"
          value={formData.userType}
          onChange={handleChange}
          error={errors.userType}
          options={userTypeOptions}
        />

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

        <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
          {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
        </Button>

        <div className="auth-switch">
          <span>لديك حساب بالفعل؟ </span>
          <Link href="/auth/login" className="auth-switch-link">
            سجل دخولك الآن!
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Signup