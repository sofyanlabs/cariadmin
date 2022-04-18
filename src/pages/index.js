import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import Service from "../components/home/service"
import WhyHome from "../components/home/why"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Home"
    />
    
    <Hero />
    <About />
    <Service />
    <WhyHome />
  </Layout>
)

export default IndexPage
