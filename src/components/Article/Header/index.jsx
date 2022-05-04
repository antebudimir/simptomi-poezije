import React from "react"
import {
  Wrapper,
  ArticleTitle,
  Information,
  Date,
  Author,
} from "./index.styled"
import { author } from "../../../../blog-config"
import Divider from "components/Divider"
import TagList from "components/TagList"

const Header = ({ title, date, tags, minToRead }) => {
  return (
    <Wrapper>
      <ArticleTitle> {title} </ArticleTitle>

      <Information>
        <Author>{author} </Author>
        <Date>· {date} </Date>
        <Date>· {minToRead} min.</Date>
      </Information>

      {tags && <TagList tagList={tags} />}

      <Divider mt="0" />
    </Wrapper>
  )
}

export default Header
