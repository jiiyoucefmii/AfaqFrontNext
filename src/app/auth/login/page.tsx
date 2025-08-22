"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import "@/assets/styles/Auth.css";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name in errors && errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No API calls; form submission is handled here for design purposes
  };

  return (
    <AuthLayout title="تسجيل الدخول" subtitle="مرحباً بك مرة أخرى">
      <form onSubmit={handleSubmit} className="auth-form">
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

        <Button type="submit" className="auth-submit-btn">
          تسجيل الدخول
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
  );
}