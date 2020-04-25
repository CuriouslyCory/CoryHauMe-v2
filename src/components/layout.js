import React from "react"
import { Link } from "gatsby"
import { Container, Navbar } from 'react-bootstrap';
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
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
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
      <Container className={mainScss.wrapper}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/" >
            Cory Sougstad
          </Navbar.Brand>
          <Navbar className="ml-auto">
            <a href="https://www.github.com/CuriouslyCory/CoryHauMe-V2">
              <img src={githubLogo} alt="view this site on github" className="ghlogo"/>
            </a>
          </Navbar>
        </Navbar>
        <Container>
          <header>{header}</header>
          <main>{children}</main>
        </Container>
        <Container className={mainScss.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Container>
      </Container>
    )
  }
}

export default Layout
