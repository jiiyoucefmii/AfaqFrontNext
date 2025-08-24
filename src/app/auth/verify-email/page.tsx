
"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import "../../../assets/styles/Auth.css";
import "../../../assets/styles/VerifyEmail.css";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

// Define interfaces for form data and errors
interface FormData {
  email: string;
  verificationCode: string;
}

interface FormErrors {
  [key: string]: string | undefined;
  verificationCode?: string;
  submit?: string;
  success?: string;
}

interface PageContent {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const VerifyEmail = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    verificationCode: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [flowType, setFlowType] = useState<"/auth/signup" | "/auth/reset-password">("/auth/signup");
  const router = useRouter();

  useEffect(() => {
    // Check if this is a password reset flow
    const isResetFlow = localStorage.getItem("resetPasswordFlow");
    const resetEmail = localStorage.getItem("resetPasswordEmail");
    const signupEmail = localStorage.getItem("verificationEmail");

    if (isResetFlow && resetEmail) {
      setFlowType("/auth/reset-password");
      setFormData((prev) => ({ ...prev, email: resetEmail }));
    } else if (signupEmail) {
      setFlowType("/auth/signup");
      setFormData((prev) => ({ ...prev, email: signupEmail }));
    } else {
      // If no email found for either flow, redirect based on context
      router.push("/auth/signup");
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.verificationCode) {
      newErrors.verificationCode = "رمز التحقق مطلوب";
    } else if (formData.verificationCode.length !== 6) {
      newErrors.verificationCode = "رمز التحقق يجب أن يكون 6 أرقام";
    } else if (!/^\d{6}$/.test(formData.verificationCode)) {
      newErrors.verificationCode = "رمز التحقق يجب أن يحتوي على أرقام فقط";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Real API call based on flow type
      let apiEndpoint: string;
      let apiData: { email: string; code?: string; verificationCode?: string };

      if (flowType === "/auth/reset-password") {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-reset-code`;
        apiData = { email: formData.email, code: formData.verificationCode };
      } else {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email`;
        apiData = { email: formData.email, verificationCode: formData.verificationCode };
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        if (flowType === "/auth/reset-password") {
          // For password reset, redirect to reset password page with token
          localStorage.removeItem("resetPasswordFlow");
          router.push(`/reset-password?token=${result.resetToken}`);
        } else {
          // For signup, complete the registration
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));
          localStorage.removeItem("verificationEmail");
          localStorage.removeItem("userId");
          router.replace("/");
        }
      } else {
        setErrors({ submit: result.message || "رمز التحقق غير صحيح" });
      }
    } catch  {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);

    try {
      // Real API call based on flow type
      let apiEndpoint: string;

      if (flowType === "/auth/reset-password") {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/auth/resend-reset-code`;
      } else {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/auth/resend-verification`;
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setErrors({ success: result.message || "تم إرسال رمز تحقق جديد" });
        // Clear any previous errors
        if (errors.submit) {
          setErrors((prev) => ({ ...prev, submit: "" }));
        }
      } else {
        setErrors({ submit: result.message || "فشل في إعادة إرسال الرمز" });
      }
    } catch  {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" });
    } finally {
      setIsResending(false);
    }
  };

  // Dynamic content based on flow type
  const getPageContent = (): PageContent => {
    if (flowType === "/auth/reset-password") {
      return {
        title: "تحقق من بريدك الإلكتروني",
        subtitle: "لإعادة تعيين كلمة المرور",
        description: "أدخل رمز التحقق المرسل إلى عنوان بريدك الإلكتروني لإعادة تعيين كلمة المرور",
        buttonText: "التحقق والمتابعة",
      };
    } else {
      return {
        title: "تحقق من بريدك الإلكتروني",
        subtitle: "للمتابعة إلى منصة آفاق التعليمية",
        description: "أدخل رمز التحقق المرسل إلى عنوان بريدك الإلكتروني",
        buttonText: "متابعة",
      };
    }
  };

  const content = getPageContent();

  return (
    <div>
      <Navbar />
      <div className="verify-email-page">
        <div className="verify-email-container">
          <div className="verify-email-content">
            <div className="verify-email-header">
              <div className="logo-container">
                <div className="logo-icon">
                  <div className="logo-squares">
                    <div className="logo-square black"></div>
                    <div className="logo-square yellow"></div>
                    <div className="logo-square black"></div>
                    <div className="logo-square yellow"></div>
                  </div>
                </div>
              </div>
              <h1 className="verify-email-title">{content.title}</h1>
              <p className="verify-email-subtitle">{content.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="verify-email-form">
              {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}
              {errors.success && <div className="success-message">{errors.success}</div>}

              <div className="email-display">
                <div className="email-input-wrapper">
                  <FaEnvelope className="email-icon" />
                  <input type="email" name="email" value={formData.email} readOnly className="email-input" />
                </div>
              </div>

              <div className="verify-info">
                <p>{content.description}</p>
              </div>

              <div className="verification-input-wrapper">
                <FaLock className="verification-icon" />
                <input
                  type="text"
                  name="verificationCode"
                  placeholder="رمز التحقق"
                  value={formData.verificationCode}
                  onChange={handleChange}
                  className={`verification-input ${errors.verificationCode ? "error" : ""}`}
                  maxLength={6}
                />
              </div>
              {errors.verificationCode && <span className="error-text">{errors.verificationCode}</span>}

              <Button type="submit" isLoading={isLoading} className="verify-submit-btn">
                {isLoading ? "جاري التحقق..." : content.buttonText}
              </Button>

              <div className="resend-section">
                <p>لم تستلم الرمز؟</p>
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={isResending}
                  className="resend-link"
                >
                  {isResending ? "جاري الإرسال..." : "إعادة إرسال"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyEmail;
