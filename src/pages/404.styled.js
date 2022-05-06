import styled from "styled-components"

export const NotFound = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 15rem);
  color: ${props => props.theme.colors.secondaryColor};
  text-align: center;

  & > h2 {
    margin-bottom: 16px;
    font-size: 48px;
    font-weight: bold;
  }

  & > p {
    font-size: 1.5rem;
    line-height: 1.5;

    & .link {
      border-radius: ${props => props.theme.spacing.primaryRadius};
      padding: 0 0.5rem;
      background-color: ${props => props.theme.colors.secondaryColor};
      color: ${props => props.theme.colors.primaryColor};
    }
  }

  & .link:hover,
  & a:focus .link {
    display: inline-block;
    transform: scale(1.1);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`
