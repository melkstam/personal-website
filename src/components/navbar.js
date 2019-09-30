import React from "react"

import "react-bulma-components/dist/react-bulma-components.min.css"
import { Navbar, Heading, Container } from "react-bulma-components"

const NavbarComponent = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <Navbar.Item>
          <Heading size={4}>Vilhelm Melkstam</Heading>
        </Navbar.Item>
      </Navbar.Brand>
    </Container>
  </Navbar>
)

export default NavbarComponent
