import React from "react"

import { Footer, Container } from 'rbx'

const FooterComponent = () => (
  <Footer>
    <Container>
      Made by Vilhelm Melktam © {new Date().getFullYear()}
    </Container>
  </Footer>
)

export default FooterComponent
