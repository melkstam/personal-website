import React from "react"

import { Card, Column } from "rbx"

import Image from "./image"

const Project = ({ id, title, image, description, readMoreLink }) => (
  <Column
    mobile={{ size: 'half' }}
    tablet={{ size: 'half' }}
    desktop={{ size: 'one-third' }}
    widescreen={{ size: 'one-quarter' }}
    fullhd={{ size: 'one-quarter' }}
    key={id}
  >
    <Card className="project-card">
      <Card.Image>
        <Image alt={title} filename={image} />
      </Card.Image>
      <Card.Header>
        <Card.Header.Title>
          {title}
        </Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <p>{description} <a href={readMoreLink}>Read more.</a></p>
      </Card.Content>
    </Card>
  </Column>
)

export default Project