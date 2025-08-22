import React, { ReactNode } from 'react'
import Sidenav from './Sidebar'

interface ProfileLayoutProps {
    children: ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
    return <Sidenav>{children}</Sidenav>
}

export default ProfileLayout