import React from 'react';

import {
  Section, Container, Title,
} from 'rbx';

import Icon from '@mdi/react';
import {
  mdiPhone, mdiAt, mdiLinkedin, mdiGithub,
} from '@mdi/js';

const Contact = () => (
  <Section id="contact-section">
    <Container>
      <Title>Contact me</Title>
      <Title subtitle>Let&apos;s get in touch!</Title>

      <div className="contact-me-list">
        <div>
          <Icon path={mdiPhone} size={1} />
          <Title subtitle size={5}>
            <a href="tel:+46723636316">+46 723 63 63 16</a>
          </Title>
        </div>
        <div>
          <Icon path={mdiAt} size={1} />
          <Title subtitle size={5}>
            <a href="mailto:vilhelm.melkstam@gmail.com">vilhelm.melkstam@gmail.com</a>
          </Title>
        </div>
        <div>
          <Icon path={mdiLinkedin} size={1} />
          <Title subtitle size={5}>
            <a href="https://www.linkedin.com/in/vilhelm-melkstam-3588bb141/">Vilhelm Melkstam</a>
          </Title>
        </div>
        <div>
          <Icon path={mdiGithub} size={1} />
          <Title subtitle size={5}>
            <a href="https://github.com/vilhelmmelkstam">vilhelmmelkstam</a>
          </Title>
        </div>
      </div>

    </Container>
  </Section>
);

export default Contact;
