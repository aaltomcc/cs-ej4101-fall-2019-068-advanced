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
            Hi! My name is Tarmo, I'm an Information Systems student at Aalto University. My degree is a mix of computer science and business. Right now I'm only focusing on my studies and freetime development projects but I have some work experience in the field of web development.
          </p>
          <p>
            I enjoy web development and design. Currently my skills lie more in the front-end but my goal is to become a full-stack professional. I've gained experience working with technologies like React, GatsbyJS, Java and MongoDB among many others. Among development I'm also enthusiastic about user experience design and have been working with related issues in academics and industry.
          </p>
          <p>
            What interests me the most in web development is the independency and possibilities to design and develop functioning products without too much resources.
          </p>
        </div>
        <div id='copyright'>© Tarmo Terimaa</div>
      </div>
    </BackgroundImage>
  )
}

export default About
