import React, { useState, useMemo } from "react"
import _ from "lodash"
import styled from "styled-components"
import { Link } from "gatsby"

import { AiOutlineArrowLeft } from "react-icons/ai"

const SeriesWrapper = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  background-color: ${props => props.theme.colors.seriesBackground};
`

const SeriesHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.secondaryColor};

  & > span {
    font-weight: normal;
    color: ${props => props.theme.colors.secondaryColor};
  }

  & > a {
    color: inherit;
  }

  & > a:hover,
  & > a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }
`

const PostWrapper = styled.ul`
  color: ${props => props.theme.colors.secondaryColor};
`

const Post = styled.li`
  position: relative;
  font-size: 1.2rem;
  color: ${props =>
    props.currentPost
      ? props.theme.colors.text
      : props.theme.colors.tertiaryText};

  &:not(:last-child) {
    margin-bottom: 9.6px;
  }

  & > a {
    color: inherit;
    transition: color 0.3s;
  }

  & > a:hover,
  & > a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }

  & > svg {
    position: absolute;
    margin-left: 5px;
  }
`

const ViewMore = styled.div`
  margin-top: 1rem;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1.2rem;
  font-style: italic;
  transition: color ${props => props.theme.timing.primaryTiming};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }
`

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
