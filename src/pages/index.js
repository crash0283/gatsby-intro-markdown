import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___data, order: DESC}) {
    edges {
      node {
        html
        frontmatter {
          title
          data(formatString: "MMMM Do YYYY")
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  
  return (<Layout>
    <SEO title="Home" />
    <div>
    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <>
        <h1>{node.frontmatter.title}</h1>
        <h4>{node.frontmatter.data}</h4>
        <div dangerouslySetInnerHTML={{__html: node.html}}></div>
        <hr style={{height: "3px"}} />
        </>
      ))
    }
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export default IndexPage
