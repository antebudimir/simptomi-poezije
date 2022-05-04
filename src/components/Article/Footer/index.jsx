import React, { useEffect, useState } from "react"
import {
  ArticleButtonWrapper,
  ArticleButtonContainer,
  ArticleButtonLabel,
  ArticleButtonTitle,
  ArticleButtonTextWrapper,
  ArrowFlexWrapper,
  Arrow,
  CommentWrapper,
  SpinnerWrapper,
  HiddenWrapper,
} from "./index.styled"
import { navigate } from "gatsby"
import { useSelector } from "react-redux"
import { useTheme } from "styled-components"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Bio from "components/Bio"
import Divider from "components/Divider"
import MDSpinner from "react-md-spinner"

// import ReactUtterences from "react-utterances"
// import { utterances } from "../../../../blog-config"

const ArticleButton = ({ right, children, onClick }) => {
  return (
    <ArticleButtonWrapper
      tabIndex="0"
      right={right}
      onClick={onClick}
      onKeyPress={onClick} // prev/next keyboard nav
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
        {/* COMMENT SYSTEM SHOULD GO HERE instead of Utterances */}
        {/* <ReactUtterences repo={utterances.repo} type={utterances.type} /> */}
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
          <div></div> // necessary to keep the "next" container aligned to the right
        )}
        {next && (
          <ArticleButton right onClick={() => navigate(next?.fields?.slug)}>
            {next?.frontmatter?.title}
          </ArticleButton>
        )}
      </ArticleButtonContainer>

      {/* Do I need bio/introduction here again???? */}
      {/* <Bio /> */}

      <CommentWrapper>
        <Divider mt="32px" />

        <Comment />
      </CommentWrapper>
    </>
  )
}

export default Footer
