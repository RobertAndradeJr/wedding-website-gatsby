import React from "react"
import {
  EngagementPicsStrings,
  captions,
  shrekGreen,
} from "../components/Strings"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Carousel from "react-bootstrap/Carousel"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const { SUBTITLE, TITLE } = EngagementPicsStrings

const engagement: React.FC = () => {
  const engagementPics = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
          relativeDirectory: { eq: "engagement" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 650, quality: 100) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
    }
  `)
  const items = engagementPics.allFile.edges
  console.log(items)
  return (
    <Layout>
      <Container as="section" id="engagement" className="text-center mt-5">
        <Row>
          <Col>
            <h2 className="display-4">{TITLE}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="display-5">{SUBTITLE}</p>
          </Col>
        </Row>
        <Row>
          <Carousel className="carousel-container w-100" activeIndex="4">
            {items.map((item, i) => {
              const { id, fluid } = item.node.childImageSharp
              console.log(fluid)
              return (
                <Carousel.Item key={id}>
                  <Img fluid={fluid} />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Row>
      </Container>
    </Layout>
  )
}
export default engagement
