import React from 'react';
import Container from 'react-bootstrap/Container';
// import { HotelStrings } from './Strings';

// const { title } = HotelStrings;
export const Hotel: React.FC = () => {
  return (
    <Container as="section" id="hotel" className="text-center vh-100">
      <h1>{'title'}</h1>
    </Container>
  );
};

export default Hotel;
