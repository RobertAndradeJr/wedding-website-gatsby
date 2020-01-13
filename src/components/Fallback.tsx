import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Fallback: React.FC = () => (
  <Container className="text-center">
    <Row>
      <Col>
        <Spinner animation="grow" variant="warning" />
      </Col>
    </Row>
  </Container>
);

export default Fallback;
