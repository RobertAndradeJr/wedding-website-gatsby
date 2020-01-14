import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { HomeStrings, CountdownStrings } from "./Strings"
import UseCountdown from "../utils/UseCountdown"
import Container from "react-bootstrap/Container"
import DownArrows from "./animations/DownArrows"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const { detail, title } = HomeStrings
const { WEDDING_DATE, WEDDING_LOCATION } = detail
const date = CountdownStrings.WEDDING_DATE
const SUBTITLE = `${WEDDING_DATE} · ${WEDDING_LOCATION}`

const Hero: React.FC = () => {
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
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  ].reverse()
  const { Days, Hours, Minutes, Seconds } = UseCountdown(date, {})
  const countdownOutput = `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`
  return (
    <BackgroundImage Tag="section" id="home" fluid={backgroundImageStack} style={{
      backgroundAttachment: 'fixed'
    }}>
      <Jumbotron fluid  className="text-center bg-transparent">
        <Container className="parallax hero" fluid>
          <Row>
            <Col>
              <h1 className="display-4">{title}</h1>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lead">{SUBTITLE}</p>
            </Col>
          </Row>
          <Row>
            <Col>{countdownOutput}</Col>
          </Row>
          <DownArrows />
        </Container>
      </Jumbotron>

    </BackgroundImage>
  )
}

export default Hero
