import styled from "styled-components"

export const SubscribeWrapper = styled.div`
  border-radius: ${props => props.theme.spacing.primaryRadius};
  /* width: 25rem; */
  max-width: 100%;
  margin: 0 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.quaternaryColor};
  font-size: 1.1rem;
  box-shadow: ${props => props.theme.colors.secondaryShadow};

  @media (min-width: 1300px) {
    width: 18.75rem;
    margin: 0;
  }
`
