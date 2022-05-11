import styled from "styled-components"

export const Header = styled.div`
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`

export const Title = styled.h1`
  margin-bottom: 15px;
  line-height: 1.2;
  font-size: 44.8px;
  color: ${props => props.theme.colors.secondaryColor};
`

export const Subtitle = styled.h3`
  display: inline-block;
  padding: 2px 3px;
  margin-top: 32px;
  margin-bottom: 8px;
  font-size: 20px;
  background-color: ${props => props.theme.colors.secondaryColor};
  color: ${props => props.theme.colors.primaryColor};
  letter-spacing: -1px;
`

export const SeriesInform = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryColor};

  & > span {
    margin: 0 3px;
  }
`

export const Date = styled.span`
  color: ${props => props.theme.colors.tertiaryColor};
`
