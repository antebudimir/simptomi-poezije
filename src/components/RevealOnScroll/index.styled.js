import styled, { css } from "styled-components"

export const StyledWrapper = styled.div`
  position: relative;
  opacity: 0;
  transition: ${props => props.theme.timing.primaryTiming} all ease;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
    `}
`
