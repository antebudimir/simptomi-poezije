import styled from "styled-components"

export const VisitorWrapper = styled.div`
  border-radius: ${props => props.theme.spacing.primaryRadius};
  box-shadow: ${props => props.theme.colors.secondaryShadow};
  max-width: 100%;
  margin: 0 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.quaternaryColor};
  font-family: "PalatinoLinotypeRoman";
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1.1rem;
  line-height: 1.5;

  @media (min-width: 1300px) {
    width: 18.75rem;
    margin: 0.7rem 0 0;
  }
`
