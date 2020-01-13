import React from 'react';
import { EngagementPicsStrings, captions, shrekGreen } from './Strings';
import UseImageLoader from '../utils/UseImageLoader';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

const { SUBTITLE, TITLE } = EngagementPicsStrings;

const EngagementPics: React.FC = () => {
  const items = UseImageLoader();

  return (
    <Container as="section" id="engagement" className="text-center">
      <Row>
        <Col>
          <h2 className="display-4">{TITLE}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="display-5">{SUBTITLE}</p>
        </Col>
      </Row>
      <Row>
        <Carousel className="w-100">
          {items.map((item, i) => (
            <Carousel.Item key={item}>
              <img src={item} alt={item} />
              <Carousel.Caption>
                <h2 style={{ color: shrekGreen }}>
                  {captions[i % captions.length]}
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};
export default EngagementPics;
