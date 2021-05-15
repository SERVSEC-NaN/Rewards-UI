import * as React from 'react'

const Layout: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Layout