import styled, { useTheme } from "styled-components"

export const HeaderWrapper = styled.header`
  z-index: 999;
  box-shadow: ${props => props.theme.colors.primaryShadow};
  position: sticky;
  top: ${props => (props.isHidden ? -93 : 0)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primaryColorTransparent};
  backdrop-filter: blur(5px);
  opacity: ${props => (props.isHidden ? 0 : 1)};
  transition: top ${props => props.theme.timing.secondaryTiming},
    opacity ${props => props.theme.timing.secondaryTiming};

  & a:focus img {
    transform: scale(1.1);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }

  @media (max-width: 680px) {
    justify-content: space-between;
  }
`
export const Logo = styled.img`
  width: 12rem;
  height: auto;

  @media (max-width: 680px) {
    width: 10rem;
  }
`
