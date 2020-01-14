import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../custom.scss"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Home from "./Home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/hotel/">Go to Hotel</Link>
  </Layout>
)

export default IndexPage
