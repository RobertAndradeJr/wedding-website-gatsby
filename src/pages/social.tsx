import React, { lazy, Suspense } from 'react';
import { InstagramPicsStrings, InstaLink } from '../components/Strings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fallback from '../components/Fallback';
import Layout from '../components/layout';
const PicturesGrid = lazy(() => import('../components/PicturesGrid'));

const {
  HASHTAG_LINK,
  HELP_US,
  PICTURE_WORTH_THOUSAND_WORDS
} = InstagramPicsStrings;

const social: React.FC = () => (
  <Layout>
    <Container id="social" className="text-center mt-5">
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
        <Suspense fallback={<Fallback />}>
          <PicturesGrid />
        </Suspense>
      </Row>
    </Container>
  </Layout>
);

export default social;
