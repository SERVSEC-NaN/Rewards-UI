import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Email({
      server: {
        host: "http://127.0.0.1",
        port: 9292,
        auth: {
          user: "",
          pass: ""
        }
      }
    })
  ]
}