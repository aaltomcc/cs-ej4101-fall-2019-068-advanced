import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
