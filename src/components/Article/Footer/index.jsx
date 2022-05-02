import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useSelector } from "react-redux"
import styled, { useTheme } from "styled-components"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import ReactUtterences from "react-utterances"

import { utterances } from "../../../../blog-config"

// MISLIM DA NE RADI????????????????????????????????????????????????
import MDSpinner from "react-md-spinner"

import Divider from "components/Divider"
import Bio from "components/Bio"

const ArticleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 0;

  @media (max-width: 768px) {
    margin-bottom: 80px;
    padding: 0 12.8px;
    flex-direction: column;

    & > div:first-child {
      margin-bottom: 12.8px;
    }
  }
`

const ArrowFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 1.3;
  white-space: nowrap;
`

const ArticleButtonTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  overflow: hidden;
`

const Arrow = styled.div`
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
  font-size: 24px;
  flex-basis: 24px;
  transition: left 0.3s;
`

const ArticleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  padding: 20.8px 16px;
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

  @media (max-width: 768px) {
    max-width: inherit;
    flex-basis: inherit;
  }
`

const ArticleButtonLabel = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`

const ArticleButtonTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
`

const CommentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
`

const HiddenWrapper = styled.div`
  display: ${props => (props.isHidden ? "none" : "block")};
`

const ArticleButton = ({ right, children, onClick }) => {
  return (
    <ArticleButtonWrapper
      right={right}
      onClick={onClick}
      title={right ? "Hajde na sljedeći post" : "Baci oko na prethodni post"}
    >
      <ArrowFlexWrapper>
        <Arrow>{right ? <BiRightArrowAlt /> : <BiLeftArrowAlt />}</Arrow>

        <ArticleButtonTextWrapper>
          <ArticleButtonLabel>
            {right ? <>Sljedeći post</> : <>Prethodni post</>}
          </ArticleButtonLabel>

          <ArticleButtonTitle>{children}</ArticleButtonTitle>
        </ArticleButtonTextWrapper>
      </ArrowFlexWrapper>
    </ArticleButtonWrapper>
  )
}

const Spinner = () => {
  const theme = useTheme()
  return (
    <SpinnerWrapper>
      <MDSpinner singleColor={theme.colors.secondaryColor} />
    </SpinnerWrapper>
  )
}

const Comment = () => {
  const { theme } = useSelector(state => state.theme)
  const [flag, setFlag] = useState(false)

  const setCommentTheme = () => {
    const message = {
      type: "set-theme",
      theme: `github-${theme}`,
    }

    let utteranceIframe = null
    utteranceIframe = document.querySelector("iframe.utterances-frame")

    if (utteranceIframe) {
      utteranceIframe.contentWindow.postMessage(message, "https://utteranc.es")
    }
  }

  useEffect(() => {
    setCommentTheme()
  }, [theme])

  useEffect(() => {
    setTimeout(() => {
      if (!flag) {
        setCommentTheme()
        setFlag(true)
      }
    }, 2000)
  }, [theme, flag])

  return (
    <>
      {flag || <Spinner />}
      <HiddenWrapper isHidden={!flag}>
        <ReactUtterences repo={utterances.repo} type={utterances.type} />
      </HiddenWrapper>
    </>
  )
}

const Footer = ({ previous, next }) => {
  return (
    <>
      <ArticleButtonContainer>
        {previous ? (
          <ArticleButton onClick={() => navigate(previous?.fields?.slug)}>
            {previous?.frontmatter?.title}
          </ArticleButton>
        ) : (
          <div></div>
        )}
        {next && (
          <ArticleButton right onClick={() => navigate(next?.fields?.slug)}>
            {next?.frontmatter?.title}
          </ArticleButton>
        )}
      </ArticleButtonContainer>

      <Bio />

      <CommentWrapper>
        <Divider mt="32px" />

        <Comment />
      </CommentWrapper>
    </>
  )
}

export default Footer
