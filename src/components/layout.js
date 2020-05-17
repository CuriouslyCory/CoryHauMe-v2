import React from "react"
import { Container, Nav, Navbar } from 'react-bootstrap';

import '../styles/layout.scss';
import {  graphql } from "gatsby"
//<Img fixed={data.imageSharp.fixed} />
class Layout extends React.Component {
  render() {
    console.log(this.props);
    const { children } = this.props

    return (
      <Container className="wrapper" fluid>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/" >
            Cory Sougstad
          </Navbar.Brand>
          <Nav className="md-auto ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
          </Nav>
        </Navbar>
        <Container className="p-0" fluid>
          <main>{children}</main>
        </Container>
        <Container className="footer">
          © {new Date().getFullYear()}, Cory Sougstad |&nbsp;
            <a href="https://www.github.com/CuriouslyCory/CoryHauMe-V2">
              View this site on GitHub
            </a>
        </Container>
      </Container>
    )
  }
}

export default Layout

export const query = graphql`
  {
    imageSharp(id: {eq: "4bc5143d-2955-574d-921c-286e8b65851a"}) {
      fixed(height: 150, width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`