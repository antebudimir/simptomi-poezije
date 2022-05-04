import React, { useState, useEffect } from "react"
import { Wrapper } from "./index.styled"
import useOffsetTop from "hooks/useOffsetTop"

import Toc from "./Toc"
import StyledMarkdown from "./StyledMarkdown"

const Body = ({ html }) => {
  const [toc, setToc] = useState([])

  const [ref, offsetTop] = useOffsetTop()

  useEffect(() => {
    setToc(
      Array.from(
        document.querySelectorAll("#article-body > h2, #article-body > h3")
      )
    )
  }, [])

  return (
    <Wrapper>
    {/* Table of contents */}
      {/* <Toc items={toc} articleOffset={offsetTop} /> */}

      <StyledMarkdown
        id="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
        itemProp="articleBody"
        ref={ref}
      />
    </Wrapper>
  )
}

export default Body
