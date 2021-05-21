import React from 'react'
import Link from 'next/link'
import styles from './admin.module.scss'
import Layout from '../components/layout'

export default function Admin() {
  return (
    <Layout>
      <h1
        className="md:text-8xl text-6xl"
        style={{
          fontFamily: `Arvo`,
          color: `var(--primary-color)`
        }}
      >
        REWARD$
      </h1>
      <p className="text-center md:text-3xl text-2xl text-gray-500 mb-10">
        Admin page
      </p>
      
      <div className="w-full max-w-xl mx-auto">
      <form>
        <input
          className="w-full mb-5 py-3 text-center border border-gray-400 rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          autoComplete='off'
          spellCheck='false'
          placeholder='Username'
          value='john_admin'
        />

        <input
          className="w-full py-3 text-center border border-gray-400 rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
          type='password'
          autoComplete='off'
          spellCheck='false'
          placeholder='password'
          value='&middot;&middot;&middot;&middot;&middot;'  
        />

        <Link href='/dashboard'>
          <button
            className={
              styles.button + " py-2 px-4 mt-5 bg-transparent text-gray-800 font-bold border border-gray-400 rounded shadow focus:outline-none focus:shadow-outline"
            }
          >
            LOGIN
          </button>
        </Link>
        </form>
      </div>
    </Layout>
  )
}