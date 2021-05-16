import React from 'react'
import Description from '../components/description'

const Main: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <h1
        className="text-5xl"
        style={{
          fontFamily: `Arvo`,
          color: `#00852e`
        }}
      >
        REWARD$
      </h1>
      <Description />
    </>
  )
}

export default Main
