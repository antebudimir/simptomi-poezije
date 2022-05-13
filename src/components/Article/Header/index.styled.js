import styled from "styled-components"

export const Wrapper = styled.div`
  margin-top: 1.4rem;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

export const ArticleTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 600px) {
    font-size: 2.2rem;
  }
`

export const Information = styled.div`
  margin-bottom: 1.3rem;
  font-size: 16px;
`

export const Author = styled.span`
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1rem;

  @media screen and (min-width: 600px) {
    font-size: 1.1rem;
  }
`

export const Date = styled.span`
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1rem;

  @media screen and (min-width: 600px) {
    font-size: 1.1rem;
  }
`
