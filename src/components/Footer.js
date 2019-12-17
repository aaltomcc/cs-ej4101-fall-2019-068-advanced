import React from "react"

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer>
        <div>
            © Tarmo Terimaa {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
