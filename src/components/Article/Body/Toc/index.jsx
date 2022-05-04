import React, { useState, useEffect } from "react"
import { TocWrapper, ParagraphTitle } from "./index.styled"
import { animateScroll } from "react-scroll"
import useScroll from "hooks/useScroll"
import getElementOffset from "utils/getElmentOffset"
import RevealOnScroll from "components/RevealOnScroll"

const STICK_OFFSET = 100

const Toc = ({ items, articleOffset }) => {
  const { y } = useScroll()

  const [revealAt, setRevealAt] = useState(4000)
  const [headers, setHeaders] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const bioElm = document.getElementById("bio")

    setRevealAt(
      getElementOffset(bioElm).top - bioElm.getBoundingClientRect().height - 400
    )
  }, [])

  useEffect(() => {
    setHeaders(
      [
        ...document.querySelectorAll("#article-body > h2, #article-body > h3"),
      ].map(element => getElementOffset(element).top)
    )
  }, [])

  useEffect(() => {
    headers.forEach((header, i) => {
      if (header - 300 < y) {
        setActive(i)
        return
      }
    })
  }, [y])

  const handleClickTitle = index => {
    animateScroll.scrollTo(headers[index] - 100)
  }

  return (
    <RevealOnScroll revealAt={revealAt} reverse>
      <TocWrapper stick={y > articleOffset - STICK_OFFSET}>
        <div>
          {items.map((item, i) => (
            <ParagraphTitle
              key={i}
              subtitle={item.tagName === "H3"}
              active={i === active}
              onClick={() => handleClickTitle(i)}
            >
              {item.innerText}
            </ParagraphTitle>
          ))}
        </div>
      </TocWrapper>
    </RevealOnScroll>
  )
}

export default Toc
