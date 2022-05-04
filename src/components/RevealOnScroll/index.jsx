import React from "react"
import { StyledWrapper } from "./index.styled"
import useScroll from "hooks/useScroll"

const RevealOnScroll = ({ revealAt, reverse, children }) => {
  const { y } = useScroll()

  let reveal = null
  if (!reverse) reveal = y > revealAt
  else reveal = y < revealAt

  return <StyledWrapper visible={reveal}>{children}</StyledWrapper>
}

export default RevealOnScroll
