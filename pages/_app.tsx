import React from 'react'
import Layout from '../components/layout'
import { AppProps } from 'next/app'
import '../styles/global.css'

const Rewards: React.FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Rewards