import React from 'react';
import {
  FooterStrings,
  InstagramPicsStrings,
  Hashtag,
  personalWebsite
} from './Strings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { TITLE, AUTHOR, NOTE } = FooterStrings;
const { HASHTAG_LINK } = InstagramPicsStrings;

const Footer: React.FC = () => (
  <Container as="footer" id="footer" className="text-center" fluid>
    <Row>
      <Col>
        <a target="_blank" rel="noopener noreferrer" href={HASHTAG_LINK}>
          {Hashtag}
        </a>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="text-muted">
          {TITLE}
          <a target="_blank" rel="noopener noreferrer" href={personalWebsite}>
            {AUTHOR}
          </a>
          {NOTE}
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
