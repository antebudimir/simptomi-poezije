import styled from "styled-components"

export const SeriesWrapper = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  background-color: ${props => props.theme.colors.seriesBackground};
`

export const SeriesHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.secondaryColor};

  & > span {
    font-weight: normal;
    color: ${props => props.theme.colors.secondaryColor};
  }

  & > a {
    color: inherit;
  }

  & > a:hover,
  & > a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }
`

export const PostWrapper = styled.ul`
  color: ${props => props.theme.colors.secondaryColor};
`

export const Post = styled.li`
  position: relative;
  font-size: 1.2rem;
  color: ${props =>
    props.currentPost
      ? props.theme.colors.text
      : props.theme.colors.tertiaryText};

  &:not(:last-child) {
    margin-bottom: 9.6px;
  }

  & > a {
    color: inherit;
    transition: color 0.3s;
  }

  & > a:hover,
  & > a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }

  & > svg {
    position: absolute;
    margin-left: 5px;
  }
`

export const ViewMore = styled.div`
  margin-top: 1rem;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1.2rem;
  font-style: italic;
  transition: color ${props => props.theme.timing.primaryTiming};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }
`