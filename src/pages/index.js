import React from "react"
import { Link } from "gatsby"

import "react-bulma-components/dist/react-bulma-components.min.css"
import { Heading, Container } from 'react-bulma-components'


import NavbarComponent from "../components/navbar"


const IndexPage = () => (
  <div>
    <NavbarComponent />
    <div>
      <Container>
        <Heading>Hi! I'm Vilhelm Melktsam.</Heading>
      </Container>
    </div>
  </div>
)

export default IndexPage
