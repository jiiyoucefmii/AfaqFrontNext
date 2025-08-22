"use client"

import { useState } from "react"
import Link from "next/link"
import AuthLayout from "../../../components/auth/AuthLayout"
import InputField from "../../../components/ui/InputField"
import Button from "../../../components/ui/Button"
// Remove CSS import - handle in globals.css or use CSS modules

interface FormErrors {
  email?: string
  submit?: string
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors({})
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        const errorData = await response.json()
        setErrors({ submit: errorData.message || "حدث خطأ في إرسال رابط إعادة التعيين" })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <AuthLayout 
        title="تم إرسال الرابط" 
        subtitle="تحقق من بريدك الإلكتروني" 
        pageType="forgot-password"
      >
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>تم إرسال رابط إعادة تعيين كلمة المرور</h3>
          <p>
            لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني <strong>{email}</strong>
          </p>
          <p>يرجى التحقق من صندوق الوارد وصندوق الرسائل غير المرغوب فيها.</p>

          <div className="auth-actions">
            <Link href="/auth/login" className="back-to-login">
              العودة لتسجيل الدخول
            </Link>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="نسيت كلمة المرور؟"
      subtitle="لا تقلق! أدخل عنوان بريدك الإلكتروني أدناه وسنرسل لك رابطاً لإعادة تعيين كلمة المرور"
      pageType="forgot-password"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="forgot-password-info">
          <p>أدخل البريد الإلكتروني المرتبط بحسابك</p>
        </div>

        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        <InputField
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={handleChange}
          error={errors.email}
        />

        <Button 
          type="submit" 
          isLoading={isLoading} 
          className="auth-submit-btn"
          disabled={isLoading}
        >
          {isLoading ? "جاري الإرسال..." : "إرسال رابط إعادة التعيين"}
        </Button>

        <div className="auth-switch">
          <span>تذكرت كلمة المرور؟ </span>
          <Link href="/auth/login" className="auth-switch-link">
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}