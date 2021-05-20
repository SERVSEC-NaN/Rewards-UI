import React from 'react'
import Link from 'next/link'

export default function Main() {
  return (
    <>
      <h1
        className="md:text-8xl text-7xl"
        style={{
          fontFamily: `Arvo`,
          color: `var(--primary-color)`
        }}
      >
        REWARD$
      </h1>
      <div className="mt-10">
        <p className="text-center text-xl md:text-2xl text-bold">
          Your time is valuable
        </p>
        <p className="text-center text-gray-500 text-base md:text-xl">
          Your time and attention will be rewarded.
        </p>
      </div>
      <img className="w-full h-36 md:my-10 mb-10" src="/redeem-card.svg" alt="" width="500" height="500" />
      <Link href="/userlogin">
        <div
          style={{ backgroundColor: `var(--primary-color)`, cursor: 'pointer' }}
          className="text-white text-center text-xl md:text-3xl py-3 px-6 rounded-full">
          Get Started
        </div>
      </Link>
    </>
  )
}