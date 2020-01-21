import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//Add Link to link to programatically created pages
import { graphql, Link } from "gatsby"

//add 'fields -> slug' to the graph
//remove 'html'
export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___data, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            data(formatString: "MMMM Do YYYY")
          }
          excerpt
        }
      }
    }
  }
`

//add Link and link to 'node.fields.slug' to link to correct path
//also we added 'excerpt' and removed 'html'
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
            <Link to={node.fields.slug}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <h4>{node.frontmatter.data}</h4>
            <p>{node.excerpt}</p>
            <hr style={{ height: "3px" }} />
          </>
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
