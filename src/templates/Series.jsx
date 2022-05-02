import React from "react"
import { graphql } from "gatsby"
import { title as siteTitle, description, siteUrl } from "../../blog-config"
import styled from "styled-components"

import Layout from "components/Layout"
import SEO from "components/SEO"
import PostList from "components/PostList"
import Divider from "components/Divider"

const Header = styled.div`
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`

const Title = styled.h1`
  margin-bottom: 15px;
  line-height: 1.2;
  font-size: 44.8px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondaryColor};
`

const Subtitle = styled.h3`
  display: inline-block;
  padding: 2px 3px;
  margin-top: 32px;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.secondaryColor};
  color: ${props => props.theme.colors.primaryColor};
  letter-spacing: -1px;
`

const SeriesInform = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryColor};

  & > span {
    margin: 0 3px;
  }
`

const Date = styled.span`
  color: ${props => props.theme.colors.tertiaryColor};
  font-weight: lighter;
`

const Series = ({ pathContext, data }) => {
  const seriesName = pathContext.series
  const posts = data.posts.nodes

  return (
    <Layout>
      <SEO
        title={`ZBIRKA: ${seriesName} | ${siteTitle}`}
        description={description}
        url={siteUrl}
      />

      <Header>
        <Subtitle> ZBIRKA </Subtitle>
        <Title> {seriesName} </Title>

        <SeriesInform>
          <span>{posts.length} postova</span>
          <span>·</span>
          <Date>Ažurirano: {posts[posts.length - 1].frontmatter.date}</Date>
        </SeriesInform>

        <Divider />
      </Header>

      <PostList postList={posts} />
    </Layout>
  )
}

export default Series

export const pageQuery = graphql`
  query BlogSeriesBySeriesName($series: String) {
    posts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { series: { eq: $series } } }
    ) {
      nodes {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(locale: "HR-hr", formatString: "DD[.] MMMM YYYY.")
          update(locale: "HR-hr", formatString: "DD[.] MMMM YYYY.")
          title
          tags
        }
      }
    }
  }
`
