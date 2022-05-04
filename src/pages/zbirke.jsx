import React from "react"
import { TagListWrapper } from "./zbirke.styled"
import { flow, map, groupBy, sortBy, filter, reverse } from "lodash/fp"
import { graphql } from "gatsby"
import { title as siteTitle, description, siteUrl } from "../../blog-config"
import SEO from "components/SEO"
import Layout from "components/Layout"
import Title from "components/Title"
import SeriesList from "components/SeriesList"
import VerticleSpace from "components/VerticalSpace"
import NoContent from "components/NoContent"

const SeriesPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const series = flow(
    map(post => ({ ...post.frontmatter, slug: post.fields.slug })),
    groupBy("series"),
    map(series => ({
      name: series[0].series,
      posts: series,
      lastUpdated: series[0].date,
    })),
    sortBy(series => new Date(series.lastUpdated)),
    filter(series => series.name),
    reverse
  )(posts)

  const setSuffix = () => {
    if (series.length === 1) {
      return "a"
    } else if (series.length > 1 && series.length < 5) {
      return "e"
    } else {
      return "i"
    }
  }

  return (
    <Layout>
      <SEO
        title={`Zbirke | ${siteTitle}`}
        description={description}
        url={siteUrl}
      />

      <TagListWrapper>
        {series.length > 0 && (
          <Title size="sm">
            {series.length} zbirk{setSuffix()}
          </Title>
        )}
      </TagListWrapper>

      {series.length === 0 && <NoContent name="zbirke" />}

      <VerticleSpace size={32} />

      <SeriesList seriesList={series} />
    </Layout>
  )
}

export default SeriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
          series
        }
      }
    }
  }
`
