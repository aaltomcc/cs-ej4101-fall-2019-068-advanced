import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"

export const NavBar = ({ siteTitle }) => {
  return (
    <Headroom>
      <div id="title">
        Tarmo Terimaa
      </div>
      <nav>
        <Link to="#">About</Link>
        <Link to="/#projects">Blog posts</Link>
      </nav>
    </Headroom>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: "",
}

export default NavBar
