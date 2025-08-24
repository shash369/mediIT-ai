import React from 'react'
import AppHeader from './_components/AppHeader';

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <AppHeader/>
        {children}
    </>
)
}

export default DashboardLayout