import React from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/global.css'

const Rewards: React.FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Rewards