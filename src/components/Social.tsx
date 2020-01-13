import React, { lazy } from 'react';
import { InstagramPicsStrings, InstaLink } from './Strings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const PicturesGrid = lazy(() => import('./PicturesGrid'));

const {
  HASHTAG_LINK,
  HELP_US,
  PICTURE_WORTH_THOUSAND_WORDS
} = InstagramPicsStrings;

const Social: React.FC = () => (
  <Container as="section" id="social" className="text-center">
    <Row>
      <Col>
        <h3 className="display-4">{PICTURE_WORTH_THOUSAND_WORDS}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="display-5">
          {HELP_US}
          <a
            className="text-blue-500"
            href={InstaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {HASHTAG_LINK}
          </a>
        </p>
      </Col>
    </Row>
    <Row>
      <PicturesGrid />
    </Row>
  </Container>
);

export default Social;
