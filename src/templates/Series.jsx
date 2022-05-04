import React from "react"
import { Header, Title, Subtitle, SeriesInform, Date } from "./Series.styled"
import { graphql } from "gatsby"
import { title as siteTitle, description, siteUrl } from "../../blog-config"
import Layout from "components/Layout"
import SEO from "components/SEO"
import PostList from "components/PostList"
import Divider from "components/Divider"

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
