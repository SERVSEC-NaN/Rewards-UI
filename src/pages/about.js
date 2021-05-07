import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>This is the about page</h1>
    <p>Here is how we started this company</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
