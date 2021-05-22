import React from 'react'
import styles from './choose.module.scss'
import Layout from '../components/layout'

export default function ChooseUserType(){
  return (
    <Layout>
      <h1 className="text-5xl mb-10">Are you a?</h1>
      <button
        className = {
          styles.option + " w-4/5 py-2 px-4 mb-5 text-3xl border border-gray-400 shadow focus:outline-none"
        }
      >Subscriber</button>
      <button
        className = {
          styles.option + " w-4/5 py-2 px-4 mb-5 text-3xl border border-gray-400 shadow focus:outline-none"
        }
      >Promoter</button>
    </Layout>
  )
}