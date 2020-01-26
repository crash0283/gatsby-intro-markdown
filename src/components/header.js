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
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
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
        <Row className={headerStyles.header}>
          <Col sm={1}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="logo"
              className="mt-1 d-none d-md-block rounded"
            />
          </Col>
          <Col sm="auto">
            <h1 style={{ margin: 0, textAlign: `center` }}>
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
        <Row className="justify-content-end">
          <Col sm={1} style={{textAlign: "center"}}>
            <Link
              to="/"
              className={headerStyles.link}
              activeStyle={{ color: `rgb(199, 224, 196)` }}
            >
              Home
            </Link>
          </Col>
          <Col sm={1} style={{textAlign: "center"}}>
            <Link
              to="/bio"
              className={headerStyles.link}
              activeStyle={{ color: `rgb(199, 224, 196)` }}
            >
              Bio
            </Link>
          </Col>
          <Col sm={1} style={{textAlign: "center"}}>
            <Link
              to="/about"
              className={headerStyles.link}
              activeStyle={{ color: `rgb(199, 224, 196)` }}
            >
              About Files
            </Link>
          </Col>
        </Row>
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
