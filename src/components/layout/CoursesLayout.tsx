import React, { ReactNode } from 'react'
import SidenavCourses from './SidebarCourses'

interface CoursesLayoutProps {
    children: ReactNode;
}

const CoursesLayout: React.FC<CoursesLayoutProps> = ({ children }) => {
    return <SidenavCourses>{children}</SidenavCourses>
}

export default CoursesLayout