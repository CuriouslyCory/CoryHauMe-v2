import React from "react"
import { Container, Nav, Navbar } from 'react-bootstrap';

import '../styles/layout.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props

    let header
    header = (
      <div></div>
    )

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
          <header>{header}</header>
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
