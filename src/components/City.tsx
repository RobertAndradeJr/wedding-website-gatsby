import React from 'react';

import { CityStrings } from './Strings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

const { CITY_NAME, CITY_MOTTO } = CityStrings;

const City: React.FC = () => (
  <Container className="text-center parallax city" id="glimpseofthecity" fluid>
    <Jumbotron className="video-content">
      <Row>
        <Col xs="12">
          <h5 className="display-4">{CITY_NAME}</h5>
        </Col>
        <Col xs="12">
          <p className="display-5">{CITY_MOTTO}</p>
        </Col>
      </Row>
    </Jumbotron>
  </Container>
);

export default City;
