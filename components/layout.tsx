import * as React from 'react'

export default function Layout ({ children }) {
  return (
    <main className="flex h-screen">
      <div className='mx-10 text-center'>
        {children}
      </div>
    </main>
  )
}