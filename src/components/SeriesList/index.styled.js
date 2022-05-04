import styled from "styled-components"

export const SeriesListWrapper = styled.div`
  margin-bottom: 60px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const SeriesWrapper = styled.div`
  position: relative;
  top: 0;
  transition: all 0.5s;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`

export const SeriesInform = styled.div`
  display: flex;
  color: ${props => props.theme.colors.tertiaryColor};

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    align-items: initial;
  }

  & > span {
    margin: 0 5px;
  }
`

export const Date = styled.p`
  font-size: 1rem;
`

export const PostCount = styled.p`
  font-size: 1rem;
`
