"use client";

import React from "react";
import Image from "next/image";
import "../../assets/styles/FilterTeachers.css";

import logoAfaq from "../../assets/images/LogoFrameBlack.svg";
import logoAfaqPlus from "../../assets/images/Afaqplus_logoBlack.svg";

interface FilterTeachersProps {
  type?: "plus" | "normal";
  onFilterChange?: (course: string) => void;
}

const SCHOOL_MODULES: string[] = [
  "الرياضيات",
  "العلوم الطبيعية",
  "الفيزياء",
  "الإعلام الآلي",
  "التاريخ والجغرافيا",
  "اللغة العربية",
  "اللغة الفرنسية",
  "اللغة الإنجليزية",
  "الفلسفة",
  "العلوم الإسلامية",
  "العلوم الاقتصادية",
  "علوم التسيير والمحاسبة",
  "القانون",
  "الفنون التشكيلية",
  "التربية البدنية والرياضية",
  "التربية الموسيقية",
];

// 💻 مجالات Afaq+
const PLUS_MODULES: string[] = [
"Web Development",
  "Mobile App Dev",
  "3D Design",
  "Artificial Intelligence",
  "Data Analysis",
  "Graphic Design",
  "Project Management",
  "Cybersecurity",
];

const FilterTeachers: React.FC<FilterTeachersProps> = ({ type, onFilterChange }) => {
  const isplus = type === "plus";
  const selectedLogo = isplus ? logoAfaqPlus : logoAfaq;

 
  const MODULES = isplus ? PLUS_MODULES : SCHOOL_MODULES;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange?.(e.target.value);
  };

  return (
    <div className="filter-teachers">
      <form>
        <div className="dropdown-group1">
          <label htmlFor={`course-${isplus ? "plus" : "school"}`}>المادة :</label>
          <select id={`course-${isplus ? "plus" : "school"}`} onChange={handleChange}>
            <option value="">الكل</option>
            {MODULES.map((mod, idx) => (
              <option key={idx} value={mod}>
                {mod}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="horizontal-line1"></div>
      <div className="logo-txt">
        <p>اساتذة</p>
        <div className="logo-wrapper">
          <Image
            src={selectedLogo}
            alt="logo"
            className={isplus ? "afaqplus-logo" : ""}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTeachers;
