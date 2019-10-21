import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import { Section, Container, Title, Column } from "rbx"

import Project from "./project"

const Projects = () => (
  <Section id="projects-section">
    <Container>
      <Title>Projects</Title>
      <Column.Group multiline breakpoint="mobile" >
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
            data.allProjectsJson.nodes.map((projectData) => (
              < Project key={projectData.id} {...projectData} />
            ))
          )}
        />
      </Column.Group>
      <Title subtitle>…and more to come!</Title>

    </Container >
  </Section >
)

export default Projects
