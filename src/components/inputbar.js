import * as React from "react"

function InputBar() {
    return(
        <>
            <input
                style={{
                    width: `400px`,
                    height: `30px`,
                    textAlign: `center`,
                    fontSize: `18px`,
                    border: `2px solid black`,
                    borderRadius: `5px`,
                    padding: `5px 0 5px 0`
                }}
                type="text"
                placeholder="Email or Phone Number"
                autocomplete="off"
                spellcheck="false"
            />
        </>
    )
}

export default InputBar