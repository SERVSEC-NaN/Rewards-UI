import * as React from "react"
import * as styles from "./choose.module.css"
import Layout from "../components/layout"

const Choose = () => (
    <Layout>
        <h1 className={styles.question}>Are you?</h1>
        <button className={styles.button}>A Subscriber</button>
        <button className={styles.button}>A Promoter</button>
    </Layout>
)

export default Choose
