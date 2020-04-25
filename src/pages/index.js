import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container } from 'react-bootstrap';

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
        <Container fluid className="codeBackground justify-content-md-center">
          <Img fixed={data.perspectiveCodeImg.childImageSharp.fixed} className="rounded-circle"/>
        </Container>
        <h3>Profesional Web Development Since 2005</h3>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
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