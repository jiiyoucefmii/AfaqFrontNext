import React from 'react';
import SidenavS from '../../components/layout/SidebarS';

export default function ProfileStudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidenavS>
      {children}
    </SidenavS>
  );
}