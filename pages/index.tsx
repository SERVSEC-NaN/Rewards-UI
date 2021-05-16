import React from 'react'
import Image from 'next/image'

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
      <p></p>
      <div className="md:flex rounded-xl p-10 md:p-5">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <p className="text-md font-semibold pl-10 pr-10">
            Your attention is valuable.
            Earn by viewing privacy-respecting ads and pay it forward to support content creators you love.
          </p>
          <p className="text-gray-500 pl-10 pr-10">
            
          </p>
        </div>
        <img className="w-72 h-72 md:h-auto mx-auto" src="/icon.svg" alt="" width="500" height="500" />
      </div>
    </>
  )
}

export default Main
