import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerStyles from "../styles/header.module.css"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        paddingBottom: `1rem`,
      }}
    >
      <Container fluid={true}>
        <Row>
          <Col sm={1}>
            <Img fixed={data.file.childImageSharp.fixed} alt="logo" className="mt-1" />
          </Col>
          <Col sm="auto">
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </Col>
        </Row>
        {
          //Create a quick navbar
        }
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            to="/"
            className={headerStyles.link}
            activeStyle={{ color: `rgb(199, 224, 196)` }}
          >
            Home
          </Link>
          <Link
            to="/bio"
            className={headerStyles.link}
            activeStyle={{ color: `rgb(199, 224, 196)` }}
          >
            Bio
          </Link>
          <Link
            to="/about"
            className={headerStyles.link}
            activeStyle={{ color: `rgb(199, 224, 196)` }}
          >
            About Files
          </Link>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
