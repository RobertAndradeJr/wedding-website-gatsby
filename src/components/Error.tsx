import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { errorStrings } from './Strings';
import SheepAnimation from './animations/SheepAnimation';

const { error, sub, description, buttonText } = errorStrings;

export const Error: React.FC = () => (
  <Container className="error border-rounded">
    <Row>
      <Col>
        <h1 className="error-text">{error}</h1>
        <SheepAnimation />
        <h4>{sub}</h4>
        <p>{description}</p>
        <a href="/social" className="btn btn-primary btn-round">
          {buttonText}
        </a>
      </Col>
    </Row>
  </Container>
);

export default Error;
