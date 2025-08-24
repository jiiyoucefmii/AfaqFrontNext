import "@/assets/styles/AfaqPlus.css"

import AfaqPlusCourses from "@/components//AfaqPLus/AfaqPlusCourses"


export default function AfaqPlusPage() {
  return (
    <div className="afaqplus">
      <div className="first-text">
        <h1 className="first text">
          ارتقِ بمهاراتك مع دورات
          <span className="gradient-text">+AFAQ</span>
          المميزة
        </h1>
      </div>
      
      <AfaqPlusCourses />
    </div>
  )
}
