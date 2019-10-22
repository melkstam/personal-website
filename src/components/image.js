import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Note: You can change "images" to whatever you'd like.

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 320, quality: 70) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(props.filename));
      if (!image) {
        return null;
      }

      // const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
};

export default Image;
