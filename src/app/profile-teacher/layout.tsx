import React from 'react';
import Sidenav from '../../components/layout/Sidebar';

export default function ProfileTeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidenav>
      {children}
    </Sidenav>
  );
}