import React, { useRef } from "react"
import { useTheme } from "styled-components"
import { Link } from "gatsby"
import { author } from "../../../../blog-config"
import logo from "../../../../public/logo 7.png"
import logoHovered from "../../../../public/logo 7-hovered.png"
import logoNight from "../../../../public/logo-night.png"
import logoNightHovered from "../../../../public/logo-night-hovered.png"
import { FooterWrapper, Logo,FooterLink } from "./index.styled"


const Footer = () => {
  const theme = useTheme()
  const imageRef = useRef()

  const getCurrentDate = () => new Date().getFullYear()

  const handleOnMouseOver = () => {
    imageRef.current.src =
      theme.name === "light" ? logoHovered : logoNightHovered
  }

  const handleOnMouseLeave = () => {
    imageRef.current.src = theme.name === "light" ? logo : logoNight
  }

  return (
    <FooterWrapper>
      <Link to="/" title="Povratak na naslovnu">
        <Logo
          src={theme.name === "light" ? logo : logoNight}
          ref={imageRef}
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
          alt="Simptomi poezije logo"
        />
      </Link>

      <FooterLink
        href="https://antebudimir.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Idi na moju glavnu stranicu"
      >
        ©{author}, 2009. - {getCurrentDate()}.
      </FooterLink>
    </FooterWrapper>
  )
}

export default Footer
