import * as React from "react"
import * as styles from "./index.module.css"
import {Link} from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className={styles.title}>REWARD$</h1>
    <h3 className={styles.description}>GET PROMOTIONS, GET MONEY</h3>
    <input
      className={styles.inputbar}
      type="text"
      placeholder="EMAIL OR PHONE NUMBER"
      autocomplete="off"
      spellcheck="false"
    />
    <Link to="/choose">
      <button className={styles.button}>LOGIN</button>
    </Link>
  </Layout>
)

export default IndexPage
