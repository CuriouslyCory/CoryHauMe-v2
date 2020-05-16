import React from "react"
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.scss';

class Projects extends React.Component {
  render() {
    const { data }  = this.props;
    return (
      <Layout>
        <SEO title="Projects" />
        <Container fluid className="page-section code-background">
          <Row className="justify-content-center mt-auto"><h2>&lt; Projects &gt;</h2></Row>
          <Row className="align-items-center fluid">
            <Col></Col>
            <Col className="p-3">
              <Card className="m-3 p-3" variant="projects">
                <Card.Title>Product Watcher</Card.Title>
                <Card.Body>
                  <Card.Text>
                    A NodeJS based script that can be configured to scrape a webpage, 
                    peek at an element, and determine if a product is in stock or out of stock. 
                    Traditional screen scrapers use something like curl to pull and read through
                    the static content delivered by a web server. Due to the prominant uptick in
                    progressive web applcations which heavily utilize client side rendering, this 
                    methodology will fail to find fully load many web pages anymore. In swoops
                    puppeteer, which impliments a headless chromium instance to actually render
                    a page the way a normal web client would see it. Notifications are sent out
                    via sms through twilio or a ifttt webhook.
                  </Card.Text>
                  <Button variant="primary" href="https://www.github.com/CuriouslyCory/ProductWatcher">View on Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="m-3 p-3" variant="projects">
                <Card.Title>The Floor is Lava!!!</Card.Title>
                <Card.Body>
                  <Card.Text>
                    My Entry into Ludem Dare 46. Pong meets platformer. Fun challenge to create a game within 48 hours. Built with Unity and C#.
                  </Card.Text>
                  <Button variant="primary" href="https://ldjam.com/events/ludum-dare/46/the-floor-is-lava">View on Ludem Dare</Button>
                  <Button variant="primary" href="https://ld46.curiouslycory.com/" className="ml-3">Launch WebGL Version</Button>
                </Card.Body>
              </Card>
              <Card className="m-3 p-3" variant="projects">
                <Card.Title>Ultrasonic Parking Sensor</Card.Title>
                <Card.Body>
                  <Card.Text>
                    Tired of the old tennis ball? Build your own Smart Parking Assistant with an ultrasonic sensor, wemos d1 mini, and a red/green LED. Use it to help get you park in your garage, and then trigger home automation actions!
                  </Card.Text>
                  <Button variant="primary" href="https://www.youtube.com/watch?v=fuI3TvVdcFA&feature=emb_title">View on Youtube</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row >
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Projects