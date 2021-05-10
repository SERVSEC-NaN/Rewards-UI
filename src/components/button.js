import * as React from "react"

import * as styles from "./button.module.css"

function Button({ text }) {
    return(
        <>
            <button className={styles.login}>{text}</button>
        </>
    )
}

export default Button