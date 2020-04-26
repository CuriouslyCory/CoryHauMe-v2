import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Container, Row } from 'react-bootstrap';

import Img from 'gatsby-image'
import { graphql } from 'gatsby';

import indexScss from '../styles/index.scss';

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
              <Img fixed={data.perspectiveCodeImg.childImageSharp.fixed} className="rounded-circle profile-pic mx-auto d-block"/>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <p>Profesional Web Development Since 2005</p>
          </Row>
        </Container>
        <Container fluid className="bottom-content">
          <Row>
            <Col md>
              <h3>About Me</h3>
              <div className="bio">
                <p>
                  Currently a Lead Systems Engineer at Insight Enterprises Inc building rich user experiences. I am a developer, content creator, maker, and general creative enthusiast. 
                  Formerly the IT Manager at Responsive Data where I really cut my teeth on full stack, top to bottom, front to back, development. 
                </p>
              </div>
            </Col>
            <Col md></Col>
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