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
          relativeDirectory: { eq: "engagement" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fixed(height: 650, fit: COVER) {
                ...GatsbyImageSharpFixed
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
          <Col>
            <Carousel>
              {items.map((item, i) => {
                const { id, fixed } = item.node.childImageSharp
                return (
                  <Carousel.Item key={id}>
                    <Img fixed={fixed} />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default engagement
