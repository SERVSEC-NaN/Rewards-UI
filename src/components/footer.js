import * as React from "react"

function Footer() {
      return(
            <footer
                  style={{
                        width: `100%`,
                        maxWidth: `768px`,
                        margin: `auto`,
                        padding: `2rem 0 2rem 0`
                        
                  }}
            >
                  © {new Date().getFullYear()}, Built by Rewards
            </footer>
            
      )
}

export default Footer