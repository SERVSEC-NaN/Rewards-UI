import React from 'react'
import Layout from '../components/layout'
import {useAuth0} from '@auth0/auth0-react'

export default function Admin() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Layout>
      <h1 className="title md:text-8xl text-6xl">
        REWARD$
      </h1>

      <p className="text-center md:text-3xl text-2xl text-gray-500 mb-10">
        Admin page
      </p>
      
      <button
        onClick={() => loginWithRedirect()}
        className="login-button text-white text-center text-xl md:text-2xl py-3 px-6 rounded-full mx-auto"
      >
        Login
      </button>

      <style jsx>{`
        .title {
          font-family: Arvo;
          color: var(--primary-color);
        }

        .login-button {
          border: 2px solid var(--primary-color);
          cursor: pointer;
          width: 250px;
          color: var(--primary-color);
          transition: all 0.3s ease-in-out;
        }

        .login-button:hover {
          background: var(--primary-color);
          color: #ffffff;
          outline: none;
        }
      `}</style>
    </Layout>
  )
}