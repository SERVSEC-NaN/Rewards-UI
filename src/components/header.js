import * as React from "react"
import * as styles from "./header.module.css"

function Header({ siteTitle }) {
  return (
    <header>
      <Menu siteTitle={siteTitle}/>
    </header>
  )
}

function Menu({siteTitle}) {
  return (
    <nav style={{
      width: `100%`,
      maxWidth: `768px`,
      margin: `auto`
    }}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          {siteTitle}
        </li>
        <Buttons />
      </ul>
    </nav>
  )
}

function Buttons() {
  return (
    <>
      <button className={styles.login}>
        Login
      </button>
      <button className={styles.signup}>
          Sign Up
      </button>
    </>
  )
}

export default Header