import styled from "styled-components"

export const Wrapper = styled.div`
  border-radius: ${props => props.theme.spacing.primaryRadius};
  box-shadow: ${props => props.theme.colors.secondaryShadow};
  width: 18.75rem;
  margin-bottom: 5rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.quaternaryColor};
  font-size: 1.1rem;

  /* @media (max-width: 1300px) {
  display: none;
} */
`

export const Title = styled.div`
  color: ${props => props.theme.colors.secondaryColor};
  margin-bottom: 25px;
  font-family: "Gill Sans MT Pro Bold";
  text-align: center;
`

export const Tag = styled.li`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.secondaryColor};
  cursor: pointer;
  transition: color ${props => props.theme.timing.primaryTiming};
  font-family: "PalatinoLinotypeRoman";
  text-align: center;

  &:hover,
  & a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`
