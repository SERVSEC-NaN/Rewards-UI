import React from 'react'
import Layout from '../components/PageLayout'

export default function UserType(){
  return (
    <Layout>
      <h1 className="text-4xl md:text-5xl mb-10">Are you a?</h1>
      <button className="option w-full py-2 px-4 mb-5 text-2xl md:text-3xl border border-gray-400 shadow">Subscriber</button>
      <button className="option w-full py-2 px-4 mb-5 text-2xl md:text-3xl border border-gray-400 shadow">Promoter</button>
    
      <style jsx>{`
        .option:hover {
          background: var(--primary-color);
          color: white;
        }
      `}</style>
    </Layout>
  )
}