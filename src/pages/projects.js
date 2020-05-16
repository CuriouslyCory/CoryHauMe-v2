import React from "react"
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.scss';

class Projects extends React.Component {
  render() {
    const { data }  = this.props;
    return (
      <Layout>
        <SEO title="Projects" />
        <Container fluid>
          <Row >
            <Col>
              <h2>Projects</h2>
            </Col>
            <Col>
              <Card className="m-3 p-3" variant="projects">
                <Card.Title>Product Watcher</Card.Title>
                <Card.Body>
                  A NodeJS based script that can be configured to scrape a webpage, 
                  peek at an element, and determine if a product is in stock or out of stock. 
                  Traditional screen scrapers use something like curl to pull and read through
                  the static content delivered by a web server. Due to the prominant uptick in
                  progressive web applcations which heavily utilize client side rendering, this 
                  methodology will fail to find fully load many web pages anymore. In swoops
                  puppeteer, which impliments a headless chromium instance to actually render
                  a page the way a normal web client would see it. Notifications are sent out
                  via sms through twilio or a ifttt webhook.
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Projects