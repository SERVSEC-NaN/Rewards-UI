import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/global.css'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          rel="stylesheet"
          href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp