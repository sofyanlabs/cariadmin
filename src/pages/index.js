import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import Service from "../components/home/service"
import Why from "../components/home/why"
import Testimonial from "../components/home/testimonial"
import CTAbottom from "../components/ctabottom"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Layanan Admin Profesional untuk Bisnis Online"
    />
    
    <Hero />
    <About />
    <Service />
    <Why />
    <Testimonial />
    <CTAbottom />
  </Layout>
)

export default IndexPage
