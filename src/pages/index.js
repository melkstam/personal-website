import React from "react"
import "../styles/styles.sass"

import NavbarComponent from "../components/navbarComponent"
import HeroComponent from "../components/heroComponent"
import FooterComponent from "../components/footerComponent"


const IndexPage = () => (
  <div>
    <NavbarComponent />
    <HeroComponent />
    <FooterComponent />
  </div >
)

export default IndexPage
