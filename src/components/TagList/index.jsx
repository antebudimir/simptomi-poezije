import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import useId from "@accessible/use-id"

const StyledLink = styled(GatsbyLink)`
  border-radius: ${props => props.theme.spacing.primaryRadius};
  display: inline-block;
  margin: 0 8px 8px 0;
  padding: 9.6px 11.2px;
  background-color: ${props =>
    props.selected
      ? props.theme.colors.secondaryColor
      : props.theme.colors.quaternaryColor};
  color: ${props =>
    props.selected
      ? props.theme.colors.primaryColor
      : props.theme.colors.secondaryColor};
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.secondaryColor};
    color: ${props => props.theme.colors.primaryColor};
  }
`

const spaceToDash = text => {
  return text.replace(/\s+/g, "-")
}

const TagList = ({ tagList, count, selected }) => {
  const id = useId()

  if (!tagList) return null

  if (!count) {
    return (
      <>
        {tagList.map((tag, i) => (
          <StyledLink
            title={`Pogledaj sve postove s oznakom ${tag}`}
            key={JSON.stringify({ tag, i })}
            key={id}
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
