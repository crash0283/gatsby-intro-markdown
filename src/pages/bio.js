import React from "react"
//Adding the "Link" component from the "gatsby" library will allow you to link internal pages
//uses react-router underneath
import { Link } from "gatsby"
//Adding the "Layout" component will allow you to keep consistent layouts throughout your app
//To make adjustments to the "Layout" component, go to the layout.js file
import Layout from "../components/layout"
import SEO from "../components/seo"
import People from "../components/people"

//Adding a component inside the 'pages' directory will automatically create that page for you with the path "/bio"

const Bio = () => {
  return (
    <Layout>
      <SEO title="Bio" />
      <People
        avatar="https://source.unsplash.com/random/"
        title="Chris"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iure? Molestiae, architecto tempora placeat eligendi iusto sit repellendus facilis culpa reprehenderit fuga maxime in ad quis optio quas voluptatibus quibusdam!"
      />
      <People
        avatar="https://source.unsplash.com/random/"
        title="Sue"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iure? Molestiae, architecto tempora placeat eligendi iusto sit repellendus facilis culpa reprehenderit fuga maxime in ad quis optio quas voluptatibus quibusdam!"
      />
      <People
        avatar="https://source.unsplash.com/random/"
        title="Matt"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iure? Molestiae, architecto tempora placeat eligendi iusto sit repellendus facilis culpa reprehenderit fuga maxime in ad quis optio quas voluptatibus quibusdam!"
      />
      <People
        avatar="https://source.unsplash.com/random/"
        title="Kelly"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, iure? Molestiae, architecto tempora placeat eligendi iusto sit repellendus facilis culpa reprehenderit fuga maxime in ad quis optio quas voluptatibus quibusdam!"
      />
      <Link to="/">&larr; Back to Home</Link>
    </Layout>
  )
}

export default Bio
