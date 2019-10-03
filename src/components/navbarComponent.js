import React from "react"

import { Container, Navbar } from 'rbx'

const NavbarComponent = () => (
  <Navbar>
    <Container>
      <Navbar.Menu active="true">
        <Navbar.Segment align="end">
          <Navbar.Item href="#">About me</Navbar.Item>
          <Navbar.Item href="#">Projects</Navbar.Item>
          <Navbar.Item href="#">Contact</Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Container>
  </Navbar>
)

export default NavbarComponent
