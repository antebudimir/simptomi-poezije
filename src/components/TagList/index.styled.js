import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const StyledLink = styled(GatsbyLink)`
  border-radius: ${props => props.theme.spacing.primaryRadius};
  display: inline-block;
  margin: 0 8px 8px 0;
  padding: 0.7rem 0.7rem 0.6rem;
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

  @media screen and (min-width: 600px) {
    padding: 0.6rem 0.7rem;
  }
`
