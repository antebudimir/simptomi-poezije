import React, { useState, useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"
import { Link } from "gatsby"
import Title from "components/Title"
import Divider from "components/Divider"
import TagList from "components/TagList"

import useId from "@accessible/use-id"

const PostListWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

const PostWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.primaryColorFullTransparent};
  border-radius: ${props => props.theme.spacing.primaryRadius};
  box-shadow: ${props => props.theme.colors.secondaryShadow};
  position: relative;
  top: 0;
  padding: 1rem;
  transition: all 300ms;

  &:hover,
  &:focus {
    border-top: 1px solid ${props => props.theme.colors.secondaryColor};
    border-right: 1px solid ${props => props.theme.colors.secondaryColor};
    border-bottom: 1px solid ${props => props.theme.colors.secondaryColor};
    border-left: 1px solid ${props => props.theme.colors.secondaryColor};
  }

  /* @media (max-width: 768px) {
  } */
`

const Date = styled.p`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.tertiaryColor};
`

const Excerpt = styled.p`
  margin-bottom: 32px;
  line-height: 1.4;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secondaryColor};
`

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  )
}

const PostList = ({ postList }) => {
  const [postCount, setPostCount] = useState(10)
  const id = useId()

  const handleMoreLoad = _.throttle(() => {
    if (checkIsScrollAtBottom() && postCount < postList.length) {
      setTimeout(() => setPostCount(postCount + 10), 300)
    }
  }, 250)

  useEffect(() => {
    window.addEventListener("scroll", handleMoreLoad)

    return () => {
      window.removeEventListener("scroll", handleMoreLoad)
    }
  }, [postCount, postList])

  useEffect(() => {
    setPostCount(10)
  }, [postList])

  return (
    <PostListWrapper>
      {postList.slice(0, postCount).map((post, i) => {
        const { title, date, tags } = post.frontmatter
        const { excerpt } = post
        const { slug } = post.fields

        return (
          <>
            <PostWrapper tabIndex="0" key={id}>
              <Title size="bg">
                <Link to={slug} title={`Otvori post "${title}"`}>
                  {title}
                </Link>
              </Title>

              <Date>{date}</Date>

              <Excerpt>{excerpt}</Excerpt>

              {/* <TagList tagList={tags} /> */}
            </PostWrapper>

            {postCount - 1 !== i && postList.length - 1 !== i && (
              <Divider mt="48px" mb="32px" />
            )}
          </>
        )
      })}
    </PostListWrapper>
  )
}

export default PostList
