import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import ContactForm from '../components/contact-form';
import "../styles/index.scss";


class IndexPage extends React.Component {
  render() {
    const { data }  = this.props;
    return (
      <Layout>
        <SEO
          title="Cory Sougstad - Web Applciation Engineer"
          keywords={[`web developer`, `gatsby`, `javascript`, `react`]}
        />
        <Container fluid className="page-section top-content">
          <Row className="justify-content-center mt-auto"><h2>&lt; Web App Engineer &gt;</h2></Row>
          <Row className="align-items-center fluid">
            <Col className="p-3">
              <Img fixed={data.imageSharp.fixed} alt="Cory Sougstad" className="rounded-circle profile-pic mx-auto d-block"/>
            </Col>
          </Row>
          <Row className="justify-content-center mt-auto">
            <p>Profesional Web Development Since 2005</p>
          </Row>
        </Container>
        <Container fluid className="page-section middle-content">
          <Row>
            <Col md>
              <Bio></Bio>
            </Col>
            <Col md></Col>
          </Row>
        </Container>
        <Container fluid className="page-section bottom-content">
          <Row>
            <Col md></Col>
            <Col md>
              <h3>Drop me a line</h3>
              <ContactForm></ContactForm>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
export const query = graphql`
  query{
    imageSharp(id: {eq: "73c8c1bd-f758-5511-b2df-dc13ce47a4ca"}) {
      fixed(height: 150, width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
