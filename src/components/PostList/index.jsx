import React, { useState, useEffect } from "react"
import _ from "lodash"
import { Link } from "gatsby"
import Title from "components/Title"
import Divider from "components/Divider"
import TagList from "components/TagList"

import useId from "@accessible/use-id"
import { Excerpt, PostListWrapper, PostWrapper, Date } from "./index.styled"

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

              <TagList tagList={tags} />
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
