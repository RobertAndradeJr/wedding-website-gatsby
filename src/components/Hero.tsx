import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HomeStrings, CountdownStrings } from './Strings';
import UseCountdown from '../utils/UseCountdown';
import Container from 'react-bootstrap/Container';
import DownArrows from './animations/DownArrows';

const { detail, title } = HomeStrings;
const { WEDDING_DATE, WEDDING_LOCATION } = detail;
const date = CountdownStrings.WEDDING_DATE;
const SUBTITLE = `${WEDDING_DATE} · ${WEDDING_LOCATION}`;

const Hero: React.FC = () => {
  const { Days, Hours, Minutes, Seconds } = UseCountdown(date, {});
  const countdownOutput = `${Days}d ${Hours}h ${Minutes}m ${Seconds}s`;
  return (
    <Jumbotron fluid id="home" className="text-center mt-5">
      <Container className="parallax hero" fluid>
        <Row>
          <Col>
            <h1 className="display-4">{title}</h1>{' '}
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
  );
};

export default Hero;
