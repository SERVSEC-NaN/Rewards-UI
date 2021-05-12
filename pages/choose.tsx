import React from 'react'
import styles from '../styles/choose.module.css'

const Choose: React.FunctionComponent = () : JSX.Element => {
  return (
    <>
      <h1 className={styles.question}>Are you?</h1>
      <button className={styles.button}>A Subscriber</button>
      <button className={styles.button}>A Promoter</button>
    </>
  )
}

export default Choose