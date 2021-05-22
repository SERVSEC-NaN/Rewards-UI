import Layout from "../components/layout"
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'
import React from "react"
import LoginAlert from '../components/LoginAlert'

export default function Dashboard() {
  const { user } = useAuth0()
  const { logout } = useAuth0()
  return (
    <Layout>
      <LoginAlert />
      <h1>Welcome</h1>
      <p>Here is your user information:</p>
      <JSONPretty data={user} />
      <button
        onClick={() => logout()}
        className="button py-2 px-4 mt-5 bg-transparent hover:bg-red-700 hover:text-white hover:border-red-700 text-gray-800 font-bold border border-gray-400 rounded shadow"
      >
        Logout
      </button>
    </Layout>
  )
}