import React from "react"
import Image from "./image"

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer>
        <div>
          <div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
          </div>
          <p>
            © Tarmo Terimaa {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
