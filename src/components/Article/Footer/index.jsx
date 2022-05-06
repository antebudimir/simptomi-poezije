import React from "react"
import {
  ArticleButtonWrapper,
  ArticleButtonContainer,
  ArticleButtonLabel,
  ArticleButtonTitle,
  ArticleButtonTextWrapper,
  ArrowFlexWrapper,
  Arrow,
  CommentWrapper,
} from "./index.styled"
import { navigate } from "gatsby"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
// import Bio from "components/Bio"
import Divider from "components/Divider"
import Comment from "../Comment"

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
