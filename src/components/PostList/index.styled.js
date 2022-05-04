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
  padding: 1rem;
  transition: all 300ms;

  &:hover,
  &:focus {
    border-top: 1px solid ${props => props.theme.colors.secondaryColor};
    border-right: 1px solid ${props => props.theme.colors.secondaryColor};
    border-bottom: 1px solid ${props => props.theme.colors.secondaryColor};
    border-left: 1px solid ${props => props.theme.colors.secondaryColor};
  }

  /* @media (max-width: 768px) {
  } */
`

export const Date = styled.p`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.tertiaryColor};
`

export const Excerpt = styled.p`
  margin-bottom: 32px;
  line-height: 1.4;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secondaryColor};
`
