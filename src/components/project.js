import React from 'react';
import PropTypes from 'prop-types';

import { Card, Column } from 'rbx';

import Image from './image';

const Project = ({
  id, title, image, description, readMoreLink,
}) => (
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
        <div>
          <Image alt={title} filename={image} />
        </div>
      </Card.Image>
      <Card.Header>
        <Card.Header.Title>
          {title}
        </Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <p>{description}</p>
      </Card.Content>
      <Card.Footer>
        <a href={readMoreLink}>
          <Card.Footer.Item>
              Read more
          </Card.Footer.Item>
        </a>
      </Card.Footer>
    </Card>
  </Column>
);

Project.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  readMoreLink: PropTypes.string.isRequired,
};

export default Project;