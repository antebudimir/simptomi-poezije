import styled from "styled-components"

export const StyledMenu = styled.nav`
  /* display: none; */

  /* display: flex; */ /* align-items: center; */
  /* padding: 0 0 0 18rem; */

  @media (min-width: 481px) {
    display: flex;
    align-items: center;
    padding: 0 0 0 18rem;
  }

  @media (max-width: 680px) {
    padding: 0;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;
    cursor: pointer;
  }

  & svg path {
    fill: ${props => props.theme.colors.secondaryColor};
    transition: fill 200ms;
  }

  & button:hover svg path,
  & button:focus svg path,
  & a:hover svg path,
  & a:focus svg path {
    fill: ${props => props.theme.colors.quinaryColor};
  }
`
export const ThemeToggler = styled.button`
  position: relative;

  /* only the children svg's */
  & > svg {
    position: absolute;
    top: -1rem;
    left: -3.3rem;
    transition: opacity 300ms;
  }

  & > svg:first-child {
    opacity: ${props => (props.theme === "light" ? 0 : 1)};
    display: ${props => (props.theme === "light" ? 0 : 1)};
  }

  & > svg:last-child {
    opacity: ${props => (props.theme === "dark" ? 0 : 1)};
    display: ${props => (props.theme === "dark" ? 0 : 1)};
    width: 1.8rem;
  }
`
