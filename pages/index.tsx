import React from 'react'
import Link from 'next/link'

export default function Main() {
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
      <img className="md:w-auto w-80 h-36 md:my-10 my-5" src="/redeem-card.svg" alt="" width="500" height="500" />
      <div className="mb-10">
        <p className="text-center text-xl text-bold">
          Your time is valuable
        </p>
        <p className="text-center text-gray-500 text-md">
          Your time and attention will be rewarded.
        </p>
      </div>
      <Link href="/userlogin">
        <div
          style={{ backgroundColor: `var(--primary-color)`, cursor: 'pointer' }}
          className="text-white text-center text-xl py-2 px-5 rounded-full">
          Get Started
        </div>
      </Link>
    </>
  )
}