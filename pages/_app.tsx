import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/global.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}