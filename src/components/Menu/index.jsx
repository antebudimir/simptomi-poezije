import React from "react"
import {
  StyledMenu,
  ThemeToggler,
  MobileLabel,
  MobileSubscribe,
} from "./index.styled"
import { useTheme } from "styled-components"
import { Link } from "gatsby"
import useMediaQueries from "hooks/useMediaQueries"

import {
  FaSun,
  FaMoon,
  FaTags,
  FaRss,
  FaSearch,
  FaListUl,
  FaMailBulk,
} from "react-icons/fa"

const Menu = ({ toggleTheme }) => {
  const theme = useTheme(),
    { isSmall } = useMediaQueries()

  const handleSubscribe = () => {
    console.log("subscribe modal opened")
  }

  return (
    <StyledMenu>
      <ThemeToggler theme={theme.name}>
        <FaSun onClick={toggleTheme} title="Uključi dnevnu temu" />
        <FaMoon onClick={toggleTheme} title="Uključi noćnu temu" />
      </ThemeToggler>

      {isSmall && <MobileLabel> Oznake</MobileLabel>}
      <Link to="/oznake" title="Pregledaj postove po oznakama">
        <FaTags />
      </Link>

      {isSmall && <MobileLabel>Zbirke</MobileLabel>}
      <Link to="/zbirke" title="Idi na zbirke">
        <FaListUl />
      </Link>

      {isSmall && <MobileLabel>RSS</MobileLabel>}
      <Link
        to="/rss.xml"
        title="Kopiraj ovaj RSS feed i otvori ga u svom omiljenom čitaču kao što je Feedly"
      >
        <FaRss />
      </Link>

      {isSmall && <MobileLabel>Prati</MobileLabel>}
      {isSmall && (
        <MobileSubscribe
          title="Pretplati se na mjesečne obavijesti o novim postovima"
          onClick={handleSubscribe}
        >
          <FaMailBulk />
        </MobileSubscribe>
      )}

      <Link to="/pretraga" title="Pretraži blog">
        <FaSearch />
      </Link>
    </StyledMenu>
  )
}

export default Menu
