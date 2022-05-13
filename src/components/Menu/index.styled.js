import styled from "styled-components"

export const StyledMenu = styled.nav`
  box-shadow: ${props => props.theme.colors.primaryShadow};
  position: absolute;
  top: 5.16rem;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  background: ${props => props.theme.colors.menuBackground};

  @media (min-width: 481px) {
    box-shadow: none;
    position: initial;
    flex-flow: row nowrap;
    align-items: center;
    background: none;
  }

  @media (min-width: 681px) {
    padding: 0 0 0 16.5rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    padding: 0 0 0 1.5rem;
    cursor: pointer;
  }

  & a,
  & button:not(:first-of-type) {
    margin-bottom: 2rem;

    &:not(:last-child) {
      margin-right: 1.5rem;

      @media (min-width: 481px) {
        margin-right: 0;
      }
    }

    @media (min-width: 481px) {
      margin-bottom: 0;
    }
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
  margin: 2rem 0 3rem;

  @media screen and (min-width: 481px) {
    margin: 0;
  }

  & > svg {
    position: absolute;
    top: -1rem;
    left: 0rem;
    transition: opacity 300ms;
  }

  @media screen and (min-width: 481px) {
    & > svg {
      position: absolute;
      left: -3.3rem;
    }
  }

  & > svg:first-child {
    opacity: ${props => (props.theme === "light" ? 0 : 1)};
  }

  & > svg:last-child {
    opacity: ${props => (props.theme === "dark" ? 0 : 1)};
    width: 1.8rem;
  }
`

export const MobileLabel = styled.span`
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 0.8rem;
  text-align: center;
`

export const MobileSubscribe = styled.button`
  background-color: transparent;
  text-align: center;
`
