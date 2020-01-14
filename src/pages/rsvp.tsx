import React from 'react';
import Container from 'react-bootstrap/Container';
import RSVPForm from '../components/RSVPForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RsvpString } from '../components/Strings';
import Layout from '../components/layout';

const rsvp: React.FC = () => (
  <Layout>
    <Container as="section" id="rsvp">
      <Row className="text-center">
        <Col>
          <h3 className="display-4 my-5">{RsvpString}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="bg-warning p-5 rounded-sm">
          <RSVPForm />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default rsvp;
