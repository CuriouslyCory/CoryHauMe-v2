import React from "react"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainScss from '../styles/main.scss'
import githubLogo from '../../content/assets/GitHub-Mark-Light-64px.png'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <div></div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
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
