import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <main className="flex h-screen">
      <div className='w-screen'>
        {children}
      </div>
    </main>
  )
}