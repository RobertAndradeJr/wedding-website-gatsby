import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const DownArrows: React.FC = () => (
  <Row>
    <Col className="arrow-container">
      <div className="chevron" />
      <div className="chevron" />
      <div className="chevron" />
    </Col>
  </Row>
);

export default DownArrows;
