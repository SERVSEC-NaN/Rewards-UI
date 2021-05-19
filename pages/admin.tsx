import React from 'react'
import Link from 'next/link'
import styles from './admin.module.css'

export default function Admin() {
  return (
    <>
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

      <p className="md:text-xl text-md">Username</p>
      <input
        className="mb-5 py-3 text-center border border-gray-400 rounded shadow"
        style={{
          width: `80%`,
          fontFamily: `Montserrat`
        }}
        placeholder='johndoe123'
        type='text'
        autoComplete='off'
        spellCheck='false'
      />

      <p className="md:text-xl text-md">Password</p>
      <input
        className="py-3 text-center border border-gray-400 rounded shadow"
        style={{
          width: `80%`,
          fontFamily: `Montserrat`
        }}
        type='password'
        autoComplete='off'
        spellCheck='false'
      />
      <Link href='/dashboard'>
        <button
          className={
            styles.button + " py-2 px-4 mt-5 bg-transparent text-gray-800 font-bold border border-gray-400 rounded shadow"
          }
        >
          LOGIN
        </button>
      </Link>
    </>
  )
}