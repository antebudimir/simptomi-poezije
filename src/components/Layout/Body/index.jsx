import React from "react"
import styled from "styled-components"

const BodyWrapper = styled.div`
  max-width: 42.5rem;
  min-height: calc(100vh - 15rem);
  margin: auto;

  & > a {
    border-radius: ${props => props.theme.spacing.primaryRadius};
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 3rem 0 0;
    padding: 1rem;
    background-color: ${props => props.theme.colors.quaternaryColor};
    color: ${props => props.theme.colors.secondaryColor};
    text-decoration: none;

    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.secondaryColor};
      color: ${props => props.theme.colors.primaryColor};
    }

    @media (max-width: 768px) {
      margin: 3rem 0 0 15px;
    }
  }

  & svg {
    margin: 0 1rem 0 0;
  }
`

const Body = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>
}

export default Body
