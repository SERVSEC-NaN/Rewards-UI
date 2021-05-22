import React from 'react'
import Layout from '../components/layout'

export default function Admin() {

  return (
    <Layout>
      <h1 className="title md:text-8xl text-6xl">
        REWARD$
      </h1>

      <p className="text-center md:text-3xl text-2xl text-gray-500 mb-10">
        Admin page
      </p>
      
      <div className="w-full max-w-sm mx-auto text-xl">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center">
            <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              LOGIN
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm">
          &copy;2021 Rewards.
        </p>
      </div>

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