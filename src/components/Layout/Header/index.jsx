import React, { useEffect, useRef, useState } from "react"
import { HeaderWrapper, Logo } from "./index.styled"
import { useTheme } from "styled-components"
import { Link } from "gatsby"
import useMediaQueries from "hooks/useMediaQueries"
import Hamburger from "hamburger-react"
import Menu from "components/Menu"
import logo from "assets/images/logo 7.png"
import logoHovered from "assets/images/logo 7-hovered.png"
import logoNight from "assets/images/logo-night.png"
import logoNightHovered from "assets/images/logo-night-hovered.png"

const Header = ({ toggleTheme }) => {
  const theme = useTheme()
  const { isSmall } = useMediaQueries()
  const [scrollY, setScrollY] = useState()
  const [hidden, setHidden] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const imageRef = useRef()

  const detectScrollDirection = () => {
    if (scrollY >= window.scrollY) {
      // scroll up
      setHidden(false)
    } else if (scrollY < window.scrollY && 400 <= window.scrollY) {
      // scroll down
      setHidden(true)
    }

    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection)

    return () => {
      window.removeEventListener("scroll", detectScrollDirection)
    }
  }, [scrollY])

  useEffect(() => {
    setScrollY(window.scrollY)
  }, [])

  const handleOnMouseOver = () => {
    imageRef.current.src =
      theme.name === "light" ? logoHovered : logoNightHovered
  }

  const handleOnMouseLeave = () => {
    imageRef.current.src = theme.name === "light" ? logo : logoNight
  }

  return (
    <HeaderWrapper isHidden={hidden}>
      <Link to="/" title="Povratak na naslovnu">
        <Logo
          src={theme.name === "light" ? logo : logoNight}
          ref={imageRef}
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
          alt="Simptomi poezije logo"
        />
      </Link>

      {isSmall && (
        <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" />
      )}

      {isSmall ? (
        isOpen && <Menu toggleTheme={toggleTheme} />
      ) : (
        <Menu toggleTheme={toggleTheme} />
      )}
    </HeaderWrapper>
  )
}

export default Header
