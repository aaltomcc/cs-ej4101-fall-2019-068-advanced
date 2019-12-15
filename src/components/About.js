import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

export const About = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "About.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className="index-page-jumbotron"
      fluid={imageData}
      backgroundColor="transparent"
    >
      <div className="overlay">
        <div className="content">
          <h1>About</h1>
          <p>
            A heading starting with the "About" string (the actual case does not
            matter) and a few paragraphs (minimum 100 words in total) describing
            yourself, for instance, your current occupation and your general
            interest related to software and (or) computer science.
          </p>
          <p>
            Remember that both the repository source and the GitHub are public,
            so anyone can see what you write. If you feel uncomfortable in
            writing about yourself, write who you would like to be or just use a
            fictional character.
          </p>
          <p>
            In any case, do should not write any private information such as
            your student number, your date of birth, your address, and so on.
          </p>
        </div>
        <div id='copyright'>© Tarmo Terimaa</div>
      </div>
    </BackgroundImage>
  )
}

export default About
