import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import People from "../components/people"


//Replacing the previous content wiht our "People" component, I can now reuse the component with my custom styles only
//applied to that component

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
