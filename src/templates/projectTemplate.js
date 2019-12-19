import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
          <header className='projectHeader'>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </header>
    <div className="project-text-container">
      <div>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`