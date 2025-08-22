"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import AuthLayout from "../../../components/auth/AuthLayout"
import InputField from "../../../components/ui/InputField"
import Button from "../../../components/ui/Button"
import "../../../assets/styles/Auth.css"

interface FormData {
  password: string
  confirmPassword: string
}

interface FormErrors {
  password?: string
  confirmPassword?: string
  submit?: string
}

interface ApiResponse {
  message?: string
}

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get("token")

  useEffect(() => {
    if (!token) {
      router.push("/auth/forgot-password")
    }
  }, [token, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 8) {
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "كلمة المرور يجب أن تحتوي على حرف كبير وصغير ورقم"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمات المرور غير متطابقة"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password: formData.password,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          router.push("/auth/login")
        }, 3000)
      } else {
        const errorData: ApiResponse = await response.json()
        setErrors({ submit: errorData.message || "حدث خطأ في إعادة تعيين كلمة المرور" })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <AuthLayout title="تم تغيير كلمة المرور" subtitle="تم إعادة تعيين كلمة المرور بنجاح" pageType="reset-password">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>تم إعادة تعيين كلمة المرور بنجاح</h3>
          <p>يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.</p>
          <p>سيتم توجيهك إلى صفحة تسجيل الدخول خلال 3 ثوانٍ...</p>

          <div className="auth-actions">
            <Link href="/auth/login" className="back-to-login">
              تسجيل الدخول الآن
            </Link>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="إعادة تعيين كلمة المرور"
      subtitle="أدخل كلمة المرور الجديدة"
      pageType="reset-password"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        <InputField
          type="password"
          name="password"
          placeholder="كلمة المرور الجديدة"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          showPasswordToggle={true}
        />

        <InputField
          type="password"
          name="confirmPassword"
          placeholder="تأكيد كلمة المرور"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          showPasswordToggle={true}
        />

        <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
          {isLoading ? "جاري التحديث..." : "إعادة تعيين كلمة المرور"}
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