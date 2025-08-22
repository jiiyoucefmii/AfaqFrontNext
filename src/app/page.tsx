'use client'

import React, { useState } from 'react'
import '../assets/styles/LandingPage.css'

// Import all the new section components
import HeroSection from '../components/sections/HeroSection'
import StudentCategoriesSection from '../components/sections/StudentCategoriesSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import StatsSection from '../components/sections/StatsSection'
import CoursesSection from '../components/sections/CoursesSection'
import AfaqPlusSection from '../components/sections/AfaqPlusSection'
import ProgramPathSection from '../components/sections/ProgramPathSection'
import FAQSection from '../components/sections/FAQSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import PartnersSection from '../components/sections/PartnersSection'

export default function LandingPage() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "طالب جامعي",
      content: "منصة آفاق غيرت طريقة تعلمي تماماً. المحتوى ممتاز والمدرسون محترفون."
    },
    {
      id: 2,
      name: "فاطمة علي",
      role: "طالبة ثانوية",
      content: "أفضل منصة تعليمية جربتها. ساعدتني كثيراً في تحسين درجاتي."
    },
    {
      id: 3,
      name: "محمد حسن",
      role: "طالب متوسط",
      content: "الدروس واضحة ومفهومة، والتفاعل مع المدرسين رائع."
    }
  ]

  // Stats data
  const stats = {
    students: "25 062",
    hours: "6 580", 
    teachers: "87",
    courses: "160"
  }

  return (
    <div className="landing-page">
      <HeroSection />
      <StudentCategoriesSection />
      <FeaturesSection />
      
      <StatsSection stats={stats} />
      
      <CoursesSection />
      <AfaqPlusSection />
      <ProgramPathSection />
      <FAQSection />
      <TestimonialsSection testimonials={testimonials} />
      <PartnersSection />
    </div>
  )
}
