import React from 'react';
import Container from 'react-bootstrap/Container';
import { registryStrings } from '../components/Strings';
import Layout from '../components/layout';

const { title } = registryStrings;

export const registry: React.FC = () => {
  return (
    <Layout>
      <Container as="section" id="registry" className="text-center vh-100">
        <h1>{title}</h1>
      </Container>
    </Layout>
  );
};

export default registry;
