import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Rewards() {
  return (
    <Layout>
      <h1 className="title text-6xl md:text-8xl ">
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
      <Link href="/login">
        <div
          className="start-button mt-10 text-white text-center text-xl md:text-2xl py-3 px-6 rounded-full mx-auto"
        >
          Get Started
        </div>
      </Link>

      <style jsx>{`
        .title {
          font-family: Arvo;
          color: var(--primary-color);
        }

        .start-button {
          border: 2px solid var(--primary-color);
          background: white;
          cursor: pointer;
          width: 250px;
          color: var(--primary-color);
          transition: all 0.3s ease-in-out;
        }

        .start-button:hover {
          background: var(--primary-color);
          color: white;
        }
      `}</style>
    </Layout>
  )
}