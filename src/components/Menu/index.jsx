import React from "react"
import { StyledMenu, ThemeToggler } from "./index.styled"
import { useTheme } from "styled-components"
import { Link } from "gatsby"
// import useMediaQueries from "hooks/useMediaQueries"
import {
  FaSun,
  FaMoon,
  FaTags,
  FaRss,
  FaSearch,
  FaListUl,
} from "react-icons/fa"

const Menu = ({ toggleTheme }) => {
  const theme = useTheme()

  return (
    <StyledMenu /* style={smallMenuStyling} */>
      <ThemeToggler theme={theme.name}>
        <FaSun onClick={toggleTheme} title="Uključi dnevnu temu" />
        <FaMoon onClick={toggleTheme} title="Uključi noćnu temu" />
      </ThemeToggler>

      <Link to="/oznake" title="Pregledaj postove po oznakama">
        <FaTags />
      </Link>

      <Link to="/zbirke" title="Idi na zbirke">
        <FaListUl />
      </Link>

      <Link to="/rss.xml" title="Pretplati se na RSS feed">
        <FaRss />
      </Link>

      <Link to="/pretraga" title="Pretraži blog">
        <FaSearch style={{ marginRight: 0 }} />
      </Link>
    </StyledMenu>
  )
}

export default Menu
