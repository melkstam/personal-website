import React from "react"

import { Hero, Container, Title, Column } from 'rbx'

import Image from "./image"

import doubleDownChevron from "../images/chevron-double-down.svg"

const NavbarComponent = ({ data }) => {
  console.log(data)
  return (
    <Hero size="fullheight-with-navbar">
      <Hero.Body>
        <Container>
          <Column.Group>
            <Column size="6" className="hero-text-column" >
              <Title>Hi! I'm Vilhelm Melkstam.</Title>
              <Title as="h2" subtitle>
                I'm a developer and student. Come check out what I have done!
          </Title>
            </Column>
            <Column size="6" >
              <div className="memoji-image-wrapper" >
                <Image alt="Memoji of me" filename="memoji-hero.png" />
              </div>
            </Column>
          </Column.Group>
        </Container>
      </Hero.Body>
    </Hero >

  )
}

export default NavbarComponent