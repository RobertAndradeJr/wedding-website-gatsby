import React from "react"
import Container from "react-bootstrap/Container"
import { HotelStrings } from '../components/Strings';
import Layout from "../components/layout";

const { title } = HotelStrings;
const hotel: React.FC = () => (
  <Layout>
    <Container as="section" id="hotel" className="text-center vh-100">
      <h1>{title}</h1>
    </Container>
  </Layout>
)

export default hotel
