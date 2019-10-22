import React from 'react';

import {
  Hero, Container, Title, Column,
} from 'rbx';

import Image from './image';

import doubleDownChevron from '../images/chevron-double-down.svg';

const NavbarComponent = () => (
  <Hero size="fullheight-with-navbar">
    <Hero.Head>
      <Title as="h2" subtitle style={{ textAlign: 'center', textDecoration: 'underline' }}>
        This site is currently under development. 🏗
      </Title>
    </Hero.Head>
    <Hero.Body>
      <Container>
        <Column.Group>
          <Column size="6" className="hero-text-column">
            <Title>Hi! I&apos;m Vilhelm Melkstam.</Title>
            <Title as="h2" subtitle>
              I&apos;m a developer and student. Come check out what I have done!
            </Title>
          </Column>
          <Column size="6">
            <div className="memoji-image-wrapper">
              <Image alt="Memoji of me" filename="memoji-hero.png" />
            </div>
          </Column>
        </Column.Group>
      </Container>
    </Hero.Body>
    <Hero.Foot>
      <Container>
        <div className="chevron-down-container">
          <img className="chevron-down" alt="Double arrow down" src={doubleDownChevron} />
        </div>
      </Container>
    </Hero.Foot>
  </Hero>

);

export default NavbarComponent;
