import React from "react"

import Layout from "../components/layout"
import NavbarComponent from "../components/navbarComponent"
import HeroComponent from "../components/heroComponent"
import Projects from "../components/projects"
import AboutMe from "../components/aboutMe"
import FooterComponent from "../components/footerComponent"

const IndexPage = () => (
  <Layout>
    <NavbarComponent />
    <HeroComponent />
    <AboutMe />
    <Projects />
    <FooterComponent />
  </Layout>
)

export default IndexPage
