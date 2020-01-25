import React from "react"

import Layout from "../components/layout"
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
        {data.allMarkdownRemark.edges.map(({ node },i) => (
          <div key={i}>
            <Link to={node.fields.slug} style={{textDecoration: "none", color: `rgb(147, 214, 147)`}}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <h4>{node.frontmatter.data}</h4>
            <p>{node.excerpt}</p>
            <hr style={{ height: "3px" }} />
          </div>
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
