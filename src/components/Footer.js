import React from "react"

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer>
        <div>
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
