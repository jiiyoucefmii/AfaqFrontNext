"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AuthLayout from "../../../components/auth/AuthLayout"
import InputField from "../../../components/ui/InputField"
import Button from "../../../components/ui/Button"
import "../../../assets/styles/Auth.css"

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
  submit?: string
}

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (name in errors && errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Check if user exists
      const checkResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      })

      if (!checkResponse.ok) {
        setErrors({ submit: "المستخدم غير موجود" })
        return
      }

      // Attempt login
      const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (loginResponse.ok) {
        const data = await loginResponse.json()
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        router.push("/dashboard")
      } else {
        const errorData = await loginResponse.json()
        setErrors({ submit: errorData.message || "كلمة المرور غير صحيحة" })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout title="تسجيل الدخول" subtitle="مرحباً بك مرة أخرى">
      <form onSubmit={handleSubmit} className="auth-form">
        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <InputField
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="auth-links">
          <Link href="/auth/forgot-password" className="forgot-password-link">
            نسيت كلمة المرور؟
          </Link>
        </div>

        <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
          {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </Button>

        <div className="auth-footer">
          <p>
            ليس لديك حساب؟{" "}
            <Link href="/auth/signup" className="auth-link">
              إنشاء حساب جديد
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}