import React from "react"

import { Section, Container, Title, Card } from "rbx"

import Image from "./image"

const Projects = () => (
  <Section id="projects-section">
    <Container>
      <Title>Projects</Title>
      <Card className="project-card">
        <Card.Image>
          <Image filename="paperio.png" />
        </Card.Image>
        <Card.Header>
          <Card.Header.Title>
            PaperIO
          </Card.Header.Title>
        </Card.Header>
        <Card.Content>
          PaperIO is a clone of the online game with the same name. Me and my classmate made this in a course on OOP. <a href="https://github.com/vilhelmmelkstam/paper.io">Read more</a>.
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item>
            Read more
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </Container >
  </Section >
)

export default Projects
