import React from 'react';
import { MapStrings, googleMapsURL } from './Strings';
import Container from 'react-bootstrap/Container';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { EASIER_THAN_YOU_THINK } = MapStrings;

const Directions: React.FC = () => (
  <Container as="section" className="text-center mb-5">
    <Row>
      <Col>
        <h3 className="display-4 my-5">{EASIER_THAN_YOU_THINK}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <ResponsiveEmbed aspectRatio="21by9">
          <iframe
            title="bell-museum-map"
            src={googleMapsURL}
            width="1050"
            height="450"
            style={{ border: '0' }}
          />
        </ResponsiveEmbed>
      </Col>
    </Row>
  </Container>
);

export default Directions;
