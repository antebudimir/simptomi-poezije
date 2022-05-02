import React, { useRef } from "react"
import styled, { useTheme } from "styled-components"
import { Link } from "gatsby"
import { author } from "../../../../blog-config"
import logo from "../../../../public/logo 7.png"
import logoHovered from "../../../../public/logo 7-hovered.png"
import logoNight from "../../../../public/logo-night.png"
import logoNightHovered from "../../../../public/logo-night-hovered.png"

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.quaternaryColor};
  margin-top: 32px;
  padding: 1rem 0;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1rem;
  text-align: center;

  & a:focus img {
    transform: scale(1.1);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }
`

const Logo = styled.img`
  width: 10rem;
  height: auto;
  margin-block: 0 1rem;
`

const FooterLink = styled.a`
  color: ${props => props.theme.colors.secondaryColor};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }
`

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
