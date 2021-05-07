import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Intro from "../components/intro"
import About from "../components/about"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Intro />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
