import React from 'react';
import InvitationIllustration from '../images/undraw_invite.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InvitationStrings } from './Strings';
const { TITLE } = InvitationStrings;

const Invitation: React.FC = () => (
  <Container as="section" className="text-center" id="invitation">
    <Row>
      <Col>
        <h2 className="display-4">{TITLE}</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <img
          className="mw-100"
          src={InvitationIllustration}
          alt="invitation illustration"
        />
      </Col>
    </Row>
  </Container>
);

export default Invitation;
