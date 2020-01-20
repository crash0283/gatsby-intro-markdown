import React from "react"
//Adding the "Link" component from the "gatsby" library will allow you to link internal pages
//uses react-router underneath
import { Link } from "gatsby"
//Adding the "Layout" component will allow you to keep consistent layouts throughout your app
//To make adjustments to the "Layout" component, go to the layout.js file
import Layout from "../components/layout"
import SEO from "../components/seo"

//Adding a component inside the 'pages' directory will automatically create that page for you with the path "/bio"

const Bio = () => {
  return (
    <Layout>
      <SEO title="Bio" />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <h1>Hi, My name is Chris.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        provident eos saepe assumenda qui labore? Ipsa ullam accusantium illo et
        incidunt aut nisi, facere quasi deleniti ex fugit, ipsum dolor saepe!
        Voluptate nulla quidem incidunt voluptatem delectus omnis consectetur,
        perspiciatis nihil molestiae suscipit, nobis fugiat cum fuga et dolorum
        saepe quasi aliquid? Reiciendis ut quia impedit tempora consequuntur
        minus rerum unde mollitia nisi nemo quae pariatur debitis aliquid id,
        vitae error voluptatibus eveniet in dolorum quo provident!
        Necessitatibus enim neque, blanditiis eligendi ullam, modi hic quo
        repellat officiis qui voluptates. Cum quibusdam tenetur aut dolorem sunt
        asperiores delectus incidunt quaerat!
      </p>
      <Link to="/">&larr; Back to Home</Link>
    </Layout>
  )
}

export default Bio
