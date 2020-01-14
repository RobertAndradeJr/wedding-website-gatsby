import React from "react"
import { HowWeMetStrings, altTitles } from "./Strings"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Figure from "react-bootstrap/Figure"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const { DESCRIPTION, TITLE } = HowWeMetStrings

const HowWeMet: React.FC = () => {
  const howWeMetImages = useStaticQuery(graphql`
    query {
      mandi: file(relativePath: { eq: "howwemet-mandi.jpg" }) {
        childImageSharp {
          fixed(width: 350, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      robert: file(relativePath: { eq: "howwemet-robert.jpg" }) {
        childImageSharp {
          fixed(width: 350, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const {mandi, robert} = howWeMetImages
  return (
    <Container as="section" id="howwemet" className="text-center">
      <Row>
        <Col>
          <h3 className="display-4">{TITLE}</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 12, order: 1 }} lg={{ order: 2 }}>
          <p>{DESCRIPTION}</p>
        </Col>
        <Col sm={{ span: 6, order: 2 }} lg={{ order: 1 }}>
          <Figure>
            <Img fixed={mandi.childImageSharp.fixed} />
            <Figure.Caption>{altTitles.Mandi}</Figure.Caption>
          </Figure>
        </Col>
        <Col sm={{ span: 6, order: 3 }} lg={{ order: 3 }}>
          <Figure>
            <Img fixed={robert.childImageSharp.fixed} alt={altTitles.Robert} />
            <Figure.Caption>{altTitles.Robert}</Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  )
}

export default HowWeMet
