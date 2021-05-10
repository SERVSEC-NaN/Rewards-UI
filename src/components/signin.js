import * as React from "react"

import Button from "../components/button"
import InputBar from "../components/inputbar"

import * as styles from "./signin.module.css"

function Signin() {
    return(
        <>
            <h1 className={styles.title}>Reward$</h1>
            <h3 className={styles.description}>Get promotions, get money</h3>
            <InputBar />
            <Button text="LOGIN" />
        </>
    )
}

export default Signin