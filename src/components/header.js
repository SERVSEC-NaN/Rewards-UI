import * as React from "react"
import PropTypes from "prop-types"

import * as styles from "./header.module.css"

function Header({ siteTitle }) {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            {siteTitle}
          </li>
          <li className={styles.li}>
            About us
          </li>
          <Buttons />
        </ul>
      </div>
    </header>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header