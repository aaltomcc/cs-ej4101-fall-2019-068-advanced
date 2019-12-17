import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              date
              cover {
                childImageSharp {
                  fluid(
                    maxWidth: 1000
                    quality: 90
                    traceSVG: { color: "#2B2B2F" }
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="projectsWrapper" id='projects'>
        <h1>Projects</h1>
        <div className='projectsGrid'>
      {data.allMarkdownRemark.edges.map(e => {
        const { cover, date, title, path } = e.node.frontmatter
        return (
          <article key={e.node.id}>
                <Img fluid={cover.childImageSharp.fluid} />
                <Link to={path}></Link>
                <div className='info'>
                    <span>{date}</span>
                    <h1>{title}</h1>
                </div>
          </article>
        )
      })}
      </div>
    </section>
  )
}

export default Projects
