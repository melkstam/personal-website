import React from 'react';

import { Container, Navbar } from 'rbx';

const NavbarComponent = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <Navbar.Burger aria-label="Open navbar menu" />
      </Navbar.Brand>
      <Navbar.Menu active="true">
        <Navbar.Segment align="end">
          <Navbar.Item href="#about-me-section">About me</Navbar.Item>
          <Navbar.Item href="#projects-section">Projects</Navbar.Item>
          <Navbar.Item href="#contact-section">Contact</Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Container>
  </Navbar>
);

export default NavbarComponent;
