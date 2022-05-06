import styled from "styled-components"

export const SubscribeWrapper = styled.div`
  border-radius: ${props => props.theme.spacing.primaryRadius};
  width: 18.75rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.quaternaryColor};
  font-size: 1.1rem;
  box-shadow: ${props => props.theme.colors.secondaryShadow};

  /* @media (max-width: 1300px) {
  display: none;
} */
`
