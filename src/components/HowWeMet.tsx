import React from 'react';
import { HowWeMetStrings, altTitles } from './Strings';
import HowWeMetRobert from '../assets/howwemet-robert.jpg';
import HowWeMetMandi from '../assets/howwemet-mandi.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

const { DESCRIPTION, TITLE } = HowWeMetStrings;

const HowWeMet: React.FC = () => (
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
          <Figure.Image src={HowWeMetMandi} alt={altTitles.Mandi} />
          <Figure.Caption>{altTitles.Mandi}</Figure.Caption>
        </Figure>
      </Col>
      <Col sm={{ span: 6, order: 3 }} lg={{ order: 3 }}>
        <Figure>
          <Figure.Image src={HowWeMetRobert} alt={altTitles.Robert} />
          <Figure.Caption>{altTitles.Robert}</Figure.Caption>
        </Figure>
      </Col>
    </Row>
  </Container>
);

export default HowWeMet;
