import React from "react"
import { StyledLink } from "./index.styled"

const spaceToDash = text => {
  return text.replace(/\s+/g, "-")
}

const TagList = ({ tagList, count, selected }) => {
  if (!tagList) return null

  if (!count) {
    return (
      <>
        {tagList.map((tag, i) => (
          <StyledLink
            title={`Pogledaj sve postove s oznakom ${tag}`}
            key={JSON.stringify({ tag, i })}
            to={`/oznake?q=${tag}`}
          >
            {spaceToDash(tag)}{" "}
          </StyledLink>
        ))}
      </>
    )
  }

  return (
    <>
      {tagList.map((tag, i) => (
        <StyledLink
          title={`Pogledaj sve postove s oznakom ${tag}`}
          key={JSON.stringify({ tag, i })}
          to={
            selected === tag.fieldValue
              ? "/oznake"
              : `/oznake?q=${tag.fieldValue}`
          }
          selected={tag.fieldValue === selected}
        >
          {spaceToDash(tag.fieldValue)}
        </StyledLink>
      ))}
    </>
  )
}

export default TagList
