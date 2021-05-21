import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from './login.module.scss'

export default function UserLogin() {
  return (
    <Layout>
      <h1 className={styles.title + " md:text-8xl text-6xl text-center"}>
        REWARD$
      </h1>
      <h3 className="text-gray mb-10 text-xl">
        Your attention is valueable
      </h3>
<<<<<<< HEAD:pages/login.tsx
      <input
        className="w-full py-3 text-center border border-gray-400 rounded shadow"
        type='text'
        placeholder='EMAIL OR PHONE NUMBER'
        autoComplete='off'
        spellCheck='false'
      />
      <Link href='/chooseusertype'>
        <button
          className={
            styles.button + " py-2 px-4 mt-5 bg-transparent hover:bg-black hover:text-white text-gray-800 font-bold border border-gray-400 rounded shadow"
          }
        >
          LOGIN
        </button>
      </Link>
=======
      
      <form>
        <input
          className="w-full py-3 text-center border border-gray-400 rounded shadow"
          style={{
            fontFamily: `Montserrat`
          }}
          type='text'
          placeholder='EMAIL OR PHONE NUMBER'
          autoComplete='off'
          spellCheck='false'
        />
        <Link href='/chooseusertype'>
          <button
            className={
              styles.button + " py-2 px-4 mt-5 bg-transparent hover:bg-black hover:text-white text-gray-800 font-bold border border-gray-400 rounded shadow"
            }
          >
            LOGIN
          </button>
        </Link>
      </form>
>>>>>>> 2213f585ff915dcee99de2d656e11eeb4cdcc263:pages/userlogin.tsx
    </Layout>
  )
}