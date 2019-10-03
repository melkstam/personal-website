import React from "react"
import { Helmet } from "react-helmet"

import "../styles/styles.sass"


const Layout = (props) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Vilhelm Melkstam</title>

      <meta name="description" content="Vilhelm Melkstam's personal website showcasing who I am and what I have done." />
    </Helmet>
    {props.children}
  </div >
)

export default Layout;