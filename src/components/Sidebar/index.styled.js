import styled from "styled-components"

export const RelativeWrapper = styled.div`
  position: relative;
`

export const SidebarWrapper = styled.aside`
  position: absolute;
  top: 0;
  right: -40%;

  @media (max-width: 1300px) {
    display: none;
  }
`
