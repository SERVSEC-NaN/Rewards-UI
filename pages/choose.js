import * as React from 'react'
import * as styles from '../styles/choose.module.css'

export default function Choose () {
  return (
    <>
      <h1 className={styles.question}>Are you?</h1>
      <button className={styles.button}>A Subscriber</button>
      <button className={styles.button}>A Promoter</button>
    </>
  )
}
