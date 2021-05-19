import React from 'react'
import Link from 'next/link'

export default function UserLogin() {
  return (
    <>
      <h1
        className="text-5xl mb-2"
        style={{
          fontFamily: `Arvo`,
          color: `#00852e`
        }}
      >
        REWARD$
      </h1>
      <h3 className="text-gray mb-10">
        Your attention is valueable
      </h3>
      <input
        className="py-3 text-center border border-gray-400 rounded shadow"
        style={{
          width: `80%`,
          fontFamily: `Montserrat`
        }}
        type='text'
        placeholder='EMAIL OR PHONE NUMBER'
        autoComplete='off'
        spellCheck='false'
      />
      <Link href='/chooseusertype'>
        <button
          className="py-2 px-4 mt-5 bg-transparent hover:bg-black hover:text-white text-gray-800 font-bold border border-gray-400 rounded shadow"
        >
          LOGIN
        </button>
      </Link>
    </>
  )
}