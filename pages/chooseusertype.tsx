import React from 'react'
import styles from './chooseusertype.module.css'

export default function ChooseUserType(){
  return (
    <>
      <h1 className="text-5xl mb-10">Are you a?</h1>
      <button
        className={styles.button + " py-2 px-4 mb-5 text-3xl border border-gray-400 shadow"}
        style={{
          width: `60%`,
          outline: `none`
        }}
      >Subscriber</button>
      <button
        className={styles.button + " py-2 px-4 mb-5 text-3xl border border-gray-400 shadow"}
        style={{
          width: `60%`,
          outline: `none`
        }}
      >Promoter</button>
    </>
  )
}