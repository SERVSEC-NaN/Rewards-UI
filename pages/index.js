import Link from 'next/link'
import styles from '../styles/index.module.css'

export default function Home () {
  return (
    <>
      <h1 className={styles.title}>REWARD$</h1>
      <h3 className={styles.description}>GET PROMOTIONS, GET MONEY</h3>
      <input
        className={styles.inputbar}
        type='text'
        placeholder='EMAIL OR PHONE NUMBER'
        autoComplete='off'
        spellCheck='false'
      />
      <Link href='/choose'>
        <button className={styles.button}>LOGIN</button>
      </Link>
    </>
  )
}
