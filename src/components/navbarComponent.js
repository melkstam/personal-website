import React from 'react';

import { Container, Navbar } from 'rbx';

const NavbarComponent = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu active="true">
        <Navbar.Segment align="end">
          <Navbar.Item href="#about-me-section">About me</Navbar.Item>
          <Navbar.Item href="#projects-section">Projects</Navbar.Item>
          <Navbar.Item href="#">Contact</Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Container>
  </Navbar>
);

export default NavbarComponent;
