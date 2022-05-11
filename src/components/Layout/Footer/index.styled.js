import styled from "styled-components"

export const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.quaternaryColor};
  margin-top: 32px;
  padding: 1rem 0;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1rem;
  text-align: center;

  @media screen and (min-width: 600px) {
    font-size: 1.25rem;
  }

  & a:focus img {
    transform: scale(1.1);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }
`

export const Logo = styled.img`
  width: 10rem;
  height: auto;
  margin-block: 0 1rem;
`

export const FooterLink = styled.a`
  color: ${props => props.theme.colors.secondaryColor};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }
`
