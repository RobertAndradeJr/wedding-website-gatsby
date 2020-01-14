import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../custom.scss"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Home from "./Home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
