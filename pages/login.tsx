import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Login() {
  return (
    <Layout>
      <h1 className="title md:text-8xl text-6xl text-center">
        REWARD$
      </h1>

      <h3 className="text-gray mb-10 text-xl">
        Your attention is valueable
      </h3>
      <form>
        <input
          className="w-full py-3 text-center border border-gray-400 rounded shadow"
          type='text'
          placeholder='PHONE NUMBER'
          autoComplete='off'
          spellCheck='false'
        />
        <Link href='/usertype'>
          <button className="button py-2 px-4 mt-5 bg-transparent hover:bg-black hover:text-white text-gray-800 font-bold border border-gray-400 rounded shadow">
            LOGIN
          </button>
        </Link>
      </form>

      <style jsx>{`
        .title {
          font-family: Arvo;
          color: #00852e;
        }

        .button:hover {
          background: var(--primary-color);
        }
      `}</style>
    </Layout>
  )
}