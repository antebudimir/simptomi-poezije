import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "styled-components"
import { Link } from "gatsby"
import useMediaQueries from "hooks/useMediaQueries"
import Hamburger from "hamburger-react"
import Menu from "components/Menu"
import logo from "assets/images/logo 7.png"
import logoHovered from "assets/images/logo 7-hovered.png"
import logoNight from "assets/images/logo-night.png"
import logoNightHovered from "assets/images/logo-night-hovered.png"

import Modal from "react-modal"
import { HeaderWrapper, Logo } from "./index.styled"

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

  // SORT THIS SHIT!!!!!!!!!!!!!!!!!
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  // function openModal() {
  //   setIsOpen(true)
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }

  // function closeModal() {
  //   setIsOpen(false)
  // }

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

      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
    </HeaderWrapper>
  )
}

const customStyles = {
  content: {
    zIndex: "10000",
    position: "relative",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default Header
