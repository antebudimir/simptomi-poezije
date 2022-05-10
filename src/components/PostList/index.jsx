import React, { useState, useEffect, Fragment } from "react"
import {
  Excerpt,
  PostListWrapper,
  PostTitle,
  PostWrapper,
  Date,
} from "./index.styled"
import _ from "lodash"
import { Link } from "gatsby"
import Title from "components/Title"
import Divider from "components/Divider"
import TagList from "components/TagList"

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  )
}

const PostList = ({ postList }) => {
  const [postCount, setPostCount] = useState(10)

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
          <Fragment key={i}>
            <PostWrapper tabIndex="0">
              <PostTitle>
                <Link to={slug} title={`Otvori post "${title}"`}>
                  {title}
                </Link>
              </PostTitle>

              <Date>{date}</Date>

              <Excerpt>{excerpt}</Excerpt>

              <TagList tagList={tags} />
            </PostWrapper>

            {postCount - 1 !== i && postList.length - 1 !== i && (
              <Divider mt="48px" mb="32px" />
            )}
          </Fragment>
        )
      })}
    </PostListWrapper>
  )
}

export default PostList
