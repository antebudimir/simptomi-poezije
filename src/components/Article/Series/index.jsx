import React, { useState, useMemo } from "react"
import {
  SeriesWrapper,
  SeriesHeader,
  PostWrapper,
  Post,
  ViewMore,
} from "./index.styled"
import _ from "lodash"
import { Link } from "gatsby"

import { AiOutlineArrowLeft } from "react-icons/ai"

const Series = ({ header, series }) => {
  const [fold, setFold] = useState(true)

  const filteredPosts = useMemo(() => {
    if (series.length < 5) return series
    if (!fold) return series

    const currentPostIdx = _.findIndex(series, { currentPost: true })

    if (currentPostIdx < 2) return series.slice(0, 5)
    if (series.length - currentPostIdx - 1 < 2)
      return series.slice(series.length - 5, series.length)

    return series.slice(currentPostIdx - 2, currentPostIdx + 3)
  }, [series, fold])

  const showViewButton = useMemo(() => {
    return series.length > 5
  }, [series])

  const handleViewMoreClick = () => setFold(!fold)
  const handleViewMoreEnter = event => event.key === "Enter" && setFold(!fold)

  return (
    <SeriesWrapper>
      <SeriesHeader>
        <Link to={`/zbirke/${_.replace(header, /\s/g, "-").toLowerCase()}`}>
          ZBIRKA: {header}
        </Link>{" "}
        <span>({series.length})</span>
      </SeriesHeader>

      <PostWrapper>
        {filteredPosts.map((post, i) => (
          <Post key={i} currentPost={post.currentPost}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>{" "}
            {post.currentPost && <AiOutlineArrowLeft />}{" "}
          </Post>
        ))}
      </PostWrapper>

      {showViewButton && (
        <ViewMore
          tabIndex="0"
          onClick={handleViewMoreClick}
          onKeyPress={handleViewMoreEnter}
        >
          {fold
            ? `Više detalja (+${series.length - filteredPosts.length})`
            : "Manje detalja"}
        </ViewMore>
      )}
    </SeriesWrapper>
  )
}

export default Series
