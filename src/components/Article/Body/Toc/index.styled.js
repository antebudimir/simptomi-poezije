import styled, { css } from "styled-components"

export const TocWrapper = styled.div`
  position: absolute;
  opacity: 1;
  left: 100%;

  & > div {
    padding-right: 20px;
    padding-left: 16px;
    margin-left: 48px;
    position: relative;
    width: 240px;
    max-height: calc(100% - 185px);
    overflow-y: auto;

    /* ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.scrollTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollHandle};
    } */

    ${props =>
      props.stick &&
      css`
        position: fixed;
        top: ${STICK_OFFSET}px;
      `}
  }

  @media (max-width: 1300px) {
    display: None;
  }
`

export const ParagraphTitle = styled.div`
  margin-bottom: 8px;
  padding-left: ${props => (props.subtitle ? 19.2 : 0)}px;
  font-size: 14.4px;
  color: ${props => props.theme.colors.tertiaryColor};
  line-height: 1.3;
  transition: all 0.2s;

  ${props =>
    props.active &&
    css`
      transform: translate(-11.2px, 0);
      color: ${props => props.theme.colors.secondaryColor};
    `}

  &:hover {
    color: ${props => props.theme.colors.secondaryColor};
    cursor: pointer;
  }
`
