import React from 'react';
import SidebarCourses from '../../components/layout/SidebarCourses'

export default function CoursesTeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarCourses>
      {children}
    </SidebarCourses>
  );
}