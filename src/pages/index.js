import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/home/hero"
import About from "../components/home/about"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Home"
    />
    
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
