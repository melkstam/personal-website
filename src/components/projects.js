import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import { Section, Container, Title, Card, Column } from "rbx"

import Image from "./image"

const Projects = () => (
  <Section id="projects-section">
    <Container>
      <Title>Projects</Title>
      <Column.Group multiline breakpoint="mobile">
        <StaticQuery
          query={graphql`
          {
            allProjectsJson {
              nodes {
                title
                readMoreLink
                image
                description
                id
              }
            }
          }
          `}
          render={data => (
            data.allProjectsJson.nodes.map((project) => (
              <Column
                mobile={{ size: 'half' }}
                tablet={{ size: 'half' }}
                desktop={{ size: 'one-third' }}
                widescreen={{ size: 'one-quarter' }}
                fullhd={{ size: 'one-quarter' }}
                key={project.id}
              >
                <Card className="project-card">
                  <Card.Image>
                    <Image alt={project.title} filename={project.image} />
                  </Card.Image>
                  <Card.Header>
                    <Card.Header.Title>
                      {project.title}
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Content>
                    <p>{project.description} <a href={project.readMoreLink}>Read more.</a></p>
                  </Card.Content>
                </Card>
              </Column>
            ))
          )}
        />
      </Column.Group>
      <Title subtitle>…and more to come!</Title>

    </Container >
  </Section >
)

export default Projects
