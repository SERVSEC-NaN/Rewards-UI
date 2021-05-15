import React from 'react'
import Layout from '../components/layout'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '../styles/global.css'

const Rewards: React.FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default Rewards