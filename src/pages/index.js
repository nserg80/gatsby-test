import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Screen from "../components/screen"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Dima</h1>
    <p>Welcome to test Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `90%`, marginBottom: `1.45rem` }}>
      <Screen />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
