import Layout from "../components/layout"
import React from "react"
import cookie from 'js-cookie'

export default function Dashboard() {
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>Here is your user information:</p>
      <button
        onClick={() => {
          cookie.remove("token")
          window.location.href = "http://localhost:8000/admin"
        }}
        className="button py-2 px-4 mt-5 bg-transparent hover:bg-red-500 hover:text-white hover:border-red-500 text-gray-800 font-bold border border-gray-400 rounded shadow">
        Logout
      </button>
    </Layout>
  )
}