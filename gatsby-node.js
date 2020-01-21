/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

//Using onCreateNode to create the path or "slug" to our page
//This onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
//To see changes, you must stop and restart server

//The function handles finding the parent File node along with creating the slug.
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions  }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        // const fileNode = getNode(node.parent)
        const slug = createFilePath({ node, getNode, basePath: `data` })

        //Now you can add your new slugs directly onto the MarkdownRemark nodes. This is powerful, as any data you add to nodes is available to query later with GraphQL. 
        //This function allows you to create additional fields on nodes created by other plugins. 
        createNodeField({
            node,
            name: `slug`,
            value: slug,
          })
      }
  }

//added an implementation of the createPages API which Gatsby calls so plugins can add pages.

//You need one additional thing beyond a slug to create pages: a page template component. Like everything in Gatsby, programmatic pages are powered by React components. When creating a page, you need to specify which component to use.
  exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info

    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
  }
