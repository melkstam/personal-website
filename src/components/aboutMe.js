import React from 'react';

import {
  Section, Container, Title, Column, Card, Tag,
} from 'rbx';

import Image from './image';

const AboutMe = () => (
  <Section id="about-me-section">
    <Container>
      <Title>About me</Title>
      <Column.Group gapSize={6}>
        <Column size={3}>
          <div className="me-image-wrapper">
            <Image alt="Picture of me" filename="me.jpg" />
          </div>
        </Column>
        <Column size={6}>
          <p className="about-me-text">
            As a ninth-grader, I bought my first book on web development and since then I&apos;ve
            been hooked. My interest led me into studies in Information Technology which is where I
            at today, studying my second year at Linköping University.
          </p>
          <p className="about-me-text">
            A few years after the book kicked things off I started a small web agency, serving and
            administring websites to customers. Through this I got better at web development,
            managing professional relations and running a business.
          </p>
          <p className="about-me-text">
            Today I&apos;m looking for work and projects on the side of my studies. If you would
            like to work with me, let&apos;s
            {' '}
            <a href="#contact">get in touch!</a>
          </p>
        </Column>
        <Column size={3}>
          <Card>
            <Card.Header>
              <Card.Header.Title>
                Experience I have
              </Card.Header.Title>
            </Card.Header>
            <Card.Content>
              <p className="experience-class-title">Languages</p>
              <Tag.Group>
                {['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS'].map((language, index) => <Tag key={index}>{language}</Tag>)}
              </Tag.Group>

              <p className="experience-class-title">Technologies</p>
              <Tag.Group>
                {['React', 'GatsbyJS', 'WordPress'].map((technology, index) => <Tag key={index}>{technology}</Tag>)}
              </Tag.Group>

              <p className="experience-class-title">Tools</p>
              <Tag.Group>
                {['Git', 'CircleCI', 'ZEIT now', 'Linux', 'Docker'].map((tool, index) => <Tag key={index}>{tool}</Tag>)}
              </Tag.Group>
            </Card.Content>
          </Card>
        </Column>
      </Column.Group>
    </Container>
  </Section>
);

export default AboutMe;
