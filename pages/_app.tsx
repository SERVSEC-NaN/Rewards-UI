import React from 'react'
import { AppProps } from 'next/app'
import '../styles/global.scss'
import { Auth0Provider } from '@auth0/auth0-react'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain='dev-c6da0o4h.us.auth0.com'
      clientId='zupfTnNMehojztImQbHZEcl1XDHtKZ9n'
      redirectUri='http://localhost:3000/dashboard'
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}