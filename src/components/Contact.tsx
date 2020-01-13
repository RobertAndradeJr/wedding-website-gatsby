import React from 'react';

import { MapStrings, TEL_LINK } from './Strings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import MapIcon from './icons/MapIcon';

const {
  BOOK_UBER,
  CONTACT,
  CONTACT_NAME,
  CONTACT_NUMBER,
  GOOGLE_MAPS_LINK,
  HOW_DO_I_GET_THERE,
  SHOW_MAP,
  UBER_LINK,
  VENUE_ADDRESS,
  VENUE_ADDRESS_2,
  VENUE_NAME
} = MapStrings;

const Contact: React.FC = () => (
  <section>
    <Container id="directions" className="text-center">
      <Row>
        <Col>
          <p className="display-4 my-5">{HOW_DO_I_GET_THERE}</p>
        </Col>
      </Row>
    </Container>
    <Container className="text-center parallax bell-museum" fluid>
      <Container>
        <Jumbotron className="bg-transparent">
          <Row>
            <Col className="my-5" xs="12" md="6">
              <Row>
                <Col>
                  <h3>{VENUE_NAME}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{VENUE_ADDRESS}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{VENUE_ADDRESS_2}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={UBER_LINK}
                  >
                    {BOOK_UBER}
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col className="my-5" xs="12" md="6">
              <Row>
                <Col>
                  <h3>{CONTACT}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{CONTACT_NAME}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a target="_blank" rel="noopener noreferrer" href={TEL_LINK}>
                    <p>{CONTACT_NUMBER}</p>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={GOOGLE_MAPS_LINK}
                  >
                    <MapIcon />
                    {SHOW_MAP}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </Container>
  </section>
);

export default Contact;
