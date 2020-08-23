import React from 'react';

import {
  Hero, Container, Title, Column,
} from 'rbx';

import Icon from '@mdi/react';
import { mdiChevronDoubleDown } from '@mdi/js';

import Image from './image';

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
          <Icon path={mdiChevronDoubleDown} size={1} />
        </div>
      </Container>
    </Hero.Foot>
  </Hero>

);

export default NavbarComponent;
