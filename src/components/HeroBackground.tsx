import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"


export const HeroBackground: React.FC = ({ children }) => {
  const heroImage = useStaticQuery(graphql`
  query {
    fileName: file(relativePath: { eq: "engagement_photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
const backgroundImageStack = [
  heroImage.fileName.childImageSharp.fluid,
  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
].reverse()
  return (
    <BackgroundImage
    id="home"
    fluid={backgroundImageStack}
    style={{
      backgroundAttachment: "fixed",
    }}
  >
      {children}
    </BackgroundImage>
  )
}
