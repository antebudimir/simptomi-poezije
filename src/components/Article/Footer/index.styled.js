import styled from "styled-components"

export const ArticleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 48px;

  @media (max-width: 768px) {
    padding: 0 12.8px;
    flex-direction: column;

    & > div:first-child {
      margin-bottom: 12.8px;
    }
  }
`

export const ArrowFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 1.3;
  white-space: nowrap;
`

export const ArticleButtonTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  overflow: hidden;
`

export const Arrow = styled.div`
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
  font-size: 24px;
  flex-basis: 24px;
  transition: left 0.3s;
`

export const ArticleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  padding: 1.5rem 1.3rem 1.3rem;
  max-width: 250px;
  flex-basis: 250px;
  font-size: 17.6px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.quaternaryColor};
  color: ${props => props.theme.colors.secondaryColor};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.secondaryColorTransparent};
    color: ${props => props.theme.colors.primaryColor};
  }

  & ${ArrowFlexWrapper} {
    flex-direction: ${props => (props.right ? "row-reverse" : "row")};
  }

  & ${ArticleButtonTextWrapper} {
    align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  }

  & ${Arrow} {
    ${props => (props.right ? "margin-left: 16px" : "margin-right: 16px")};
  }

  &:hover ${Arrow} {
    left: ${props => (props.right ? 2 : -2)}px;
  }

  @media screen and (max-width: 768px) {
    flex-basis: inherit;
    max-width: inherit;
    padding: 1.7rem 1.3rem 1.3rem;
  }
`

export const ArticleButtonLabel = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`

export const ArticleButtonTitle = styled.div`
  width: 100%;
  font-family: "Gill Sans MT Pro Bold";
  font-size: 1.3rem;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`

export const CommentWrapper = styled.div`
  @media screen and (max-width: 680px) {
    padding: 0 12.8px;
  }
`
