import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Container, Row } from 'react-bootstrap';

import Img from 'gatsby-image'
import { graphql } from 'gatsby';

import indexScss from '../styles/index.scss';
import githubLogo from '../../content/assets/GitHub-Mark-Light-64px.png'

class IndexPage extends React.Component {
  render() {
    const siteTitle = "< Web App Engineer >"
    const { data }  = this.props;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Cory Sougstad - Web Applciation Engineer"
          keywords={[`web developer`, `gatsby`, `javascript`, `react`]}
        />
        <Container fluid className="code-background">
          <Row className="justify-content-center"><h2>&lt; Web App Engineer &gt;</h2></Row>
          <Row className="align-items-center">
            <Col className="p-3">
              <Img fixed={data.perspectiveCodeImg.childImageSharp.fixed} alt="Cory Sougstad" className="rounded-circle profile-pic mx-auto d-block"/>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <p>Profesional Web Development Since 2005</p>
          </Row>
        </Container>
        <Container fluid className="middle-content">
          <Row>
            <Col md>
              <h3>About Me</h3>
              <Container className="bio">
                <Row>
                  <Col>
                    <p>
                      Currently a Lead Systems Engineer at Insight Enterprises Inc building rich user experiences in ServiceNow. I am a developer, content creator, maker, and general creative enthusiast. 
                      Formerly the IT Manager at Responsive Data where I really spent 8 years practicing full stack, top to bottom, front to back, development. 
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-end">
                    <a href="https://www.github.com/CuriouslyCory/CoryHauMe-V2">
                      <img src={githubLogo} alt="view this site on github" className="sm-gh-logo"/>
                    </a>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md></Col>
          </Row>
        </Container>
        <Container fluid className="bottom-content">
          <Row>
            <Col md></Col>
            <Col md>
              <h3>Drop me a line</h3>
              <Container className="contact-form">
                <form name="contact" method="POST" data-netlify="true">
                  <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                  </p>
                  <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                  </p>
                  <p>
                    <label>Message: <textarea name="message"></textarea></label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
              </Container>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
export const query = graphql`
  query {
    perspectiveCodeImg: file(relativePath: { eq: "MyFace2.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 150, width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`