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
    <div className="projectsWrapper">
      {console.log(data)}
      {data.allMarkdownRemark.edges.map(e => {
        const { cover, date, title, path } = e.node.frontmatter
        return (
          <article>
            <Img fluid={cover.childImageSharp.fluid} />
            <Link to={path}>
              <span>{date}</span>
              <span>{title}</span>
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default Projects
