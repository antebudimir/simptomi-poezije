import React from "react"
import styled from "styled-components"

const Wrapper = styled.h1`
  margin-bottom: 24px;
  font-size: ${props => props.size};
  font-weight: 700;
  line-height: 1.3;
  color: ${props => props.theme.colors.secondaryColor};

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  &:hover,
  & a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }
`

const Title = ({ size, children }) => {
  const sizes = {
    sm: "19.2px",
    md: "25.6px",
    bg: "33.6px",
  }

  return <Wrapper size={sizes[size]}> {children} </Wrapper>
}

export default Title
