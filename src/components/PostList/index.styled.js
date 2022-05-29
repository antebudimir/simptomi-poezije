import styled from "styled-components"

export const PostListWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const PostWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.primaryColorFullTransparent};
  border-radius: ${props => props.theme.spacing.primaryRadius};
  box-shadow: ${props => props.theme.colors.secondaryShadow};
  position: relative;
  top: 0;
  padding: 0 1rem 1rem;
  transition: all 300ms;

  &:hover,
  &:focus {
    border-top: 1px solid ${props => props.theme.colors.secondaryColor};
    border-right: 1px solid ${props => props.theme.colors.secondaryColor};
    border-bottom: 1px solid ${props => props.theme.colors.secondaryColor};
    border-left: 1px solid ${props => props.theme.colors.secondaryColor};
  }
`

export const PostTitle = styled.h2`
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;

  & > a {
    display: block;
    padding: 1.3rem 0;
    color: inherit;
    transition: color 0.2s;
  }

  &:hover,
  & a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`

export const Date = styled.p`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.tertiaryColor};
`

export const Excerpt = styled.p`
  margin-bottom: 32px;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1.1rem;
  line-height: 1.6;

  @media screen and (min-width: 600px) {
    font-size: 1.3rem;
  }
`
