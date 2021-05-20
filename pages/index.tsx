import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Main() {
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
      <div className="my-5">
        <p className="text-center text-xl md:text-2xl text-bold">
          Your attention is valuable
        </p>
        <p className="text-center text-gray-500 text-base md:text-xl">
          Your time and attention will be rewarded.
        </p>
      </div>
      <img className="mx-auto" src="/redeem-card.svg" alt="" width="500" height="500" />
      <Link href="/userlogin">
        <div
          style={{ backgroundColor: `var(--primary-color)`, cursor: 'pointer', width: `250px`}}
          className="mt-5 text-white text-center text-xl md:text-2xl py-3 px-6 rounded-full mx-auto"
        >
          Get Started
        </div>
      </Link>
    </Layout>
  )
}