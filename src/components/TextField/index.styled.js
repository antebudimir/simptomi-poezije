import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
`

export const Icon = styled.span`
  position: absolute;
  top: 12px;
  left: 18px;
  font-size: 20px;
  color: ${props => props.theme.colors.senaryColor};
  text-shadow: 0 0 5px ${props => props.theme.colors.senaryColor};
  transition: all 0.2s;
`

export const Input = styled.input.attrs({ type: "text" })`
  padding: 14px 19.2px 12px 50px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.senaryColor};
  border-radius: 1vh;
  background-color: transparent;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryColor};
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s;

  &:focus,
  &:hover {
    border: 1px solid ${props => props.theme.colors.secondaryColor};
  }

  &:hover + ${Icon}, &:focus + ${Icon} {
    color: ${props => props.theme.colors.secondaryColor};
  }
`
