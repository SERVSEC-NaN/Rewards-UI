import React from 'react'
import styles from '../styles/choose.module.css'

const Choose: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <h1 className="text-6xl mb-10">Are you a?</h1>
      <button
        className={styles.button + " py-2 px-4 mb-5 text-5xl border border-gray-400 shadow"}
        style={{
          width: `60%`
        }}
      >Subscriber</button>
      <button
        className={styles.button + " py-2 px-4 mb-5 text-5xl border border-gray-400 shadow"}
        style={{
          width: `60%`
        }}
      >Promoter</button>
    </>
  )
}

export default Choose
