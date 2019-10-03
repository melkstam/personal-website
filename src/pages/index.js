import React from "react"

import Layout from "../components/layout"
import NavbarComponent from "../components/navbarComponent"
import HeroComponent from "../components/heroComponent"
import FooterComponent from "../components/footerComponent"


const IndexPage = () => (
  <Layout>
    <NavbarComponent />
    <HeroComponent />
    <FooterComponent />
  </Layout >
)

export default IndexPage
