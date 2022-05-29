import styled from "styled-components"

export const SubscribeWrapper = styled.div`
  border-radius: ${props => props.theme.spacing.primaryRadius};
  box-shadow: ${props => props.theme.colors.secondaryShadow};
  max-width: 100%;
  margin: 0 1rem;
  margin: 0 1rem;
  display: block;
  padding: 1rem;
  background-color: ${props => props.theme.colors.quaternaryColor};
  font-size: 1.1rem;

  @media (min-width: 1300px) {
    width: 18.75rem;
    margin: 4rem 0 0;
  }
`
