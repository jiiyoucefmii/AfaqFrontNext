"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FaEnvelope, FaLock } from "react-icons/fa"
import Button from "../../../components/ui/Button"
import "../../../assets/styles/Auth.css"
import "../../../assets/styles/VerifyEmail.css"

interface FormData {
  email: string
  verificationCode: string
}

interface FormErrors {
  verificationCode?: string
  submit?: string
  success?: string
}

export default function VerifyEmailPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    verificationCode: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const email = localStorage.getItem("verificationEmail")
    if (email) {
      setFormData((prev) => ({ ...prev, email }))
    } else {
      router.push("/auth/signup")
    }
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.verificationCode) {
      newErrors.verificationCode = "رمز التحقق مطلوب"
    } else if (formData.verificationCode.length !== 6) {
      newErrors.verificationCode = "رمز التحقق يجب أن يكون 6 أرقام"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          verificationCode: formData.verificationCode,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.removeItem("verificationEmail")
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        router.push("/dashboard")
      } else {
        const errorData = await response.json()
        setErrors({ submit: errorData.message || "رمز التحقق غير صحيح" })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      })

      if (response.ok) {
        setErrors({ success: "تم إرسال رمز التحقق مرة أخرى" })
      } else {
        const errorData = await response.json()
        setErrors({ submit: errorData.message || "حدث خطأ في إعادة الإرسال" })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="verify-email-container">
      <div className="verify-email-card">
        <div className="verify-email-header">
          <div className="verify-email-icon">
            <FaEnvelope />
          </div>
          <h1>تحقق من بريدك الإلكتروني</h1>
          <p>لقد أرسلنا رمز التحقق إلى</p>
          <strong>{formData.email}</strong>
        </div>

        <form onSubmit={handleSubmit} className="verify-email-form">
          {errors.submit && <div className="error-message">{errors.submit}</div>}
          {errors.success && <div className="success-message">{errors.success}</div>}

          <div className="verification-code-input">
            <FaLock className="input-icon" />
            <input
              type="text"
              name="verificationCode"
              placeholder="أدخل رمز التحقق (6 أرقام)"
              value={formData.verificationCode}
              onChange={handleChange}
              maxLength={6}
              className={errors.verificationCode ? "error" : ""}
            />
          </div>
          {errors.verificationCode && <div className="field-error">{errors.verificationCode}</div>}

          <Button type="submit" isLoading={isLoading} className="verify-submit-btn">
            {isLoading ? "جاري التحقق..." : "تحقق من الحساب"}
          </Button>

          <div className="resend-section">
            <p>لم تستلم الرمز؟</p>
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isResending}
              className="resend-btn"
            >
              {isResending ? "جاري الإرسال..." : "إعادة الإرسال"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}