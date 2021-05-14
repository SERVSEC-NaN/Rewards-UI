import React from 'react'
import styles from '../styles/choose.module.css'

const Choose: React.FunctionComponent = () : JSX.Element => {
  return (
    <>
      <h1 className={styles.question}>Are you a?</h1>
      <button className={styles.button}>Subscriber</button>
      <button className={styles.button}>Promoter</button>
    </>
  )
}

export default Choose
