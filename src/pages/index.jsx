import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import {
  author,
  title as siteTitle,
  description,
  siteUrl,
} from "../../blog-config"
import Layout from "components/Layout"
import SEO from "components/SEO"
import Bio from "components/Bio"
import PostList from "components/PostList"
import Sidebar from "components/Sidebar"
import Divider from "components/Divider"
import VerticalSpace from "components/VerticalSpace"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const tags = _.sortBy(data.allMarkdownRemark.group, ["totalCount"]).reverse()

  if (posts.length === 0) {
    return <p>Trenutno nema postova. Navrati kasnije.</p>
  }

  return (
    <Layout>
      <SEO
        title={`${siteTitle} | ${author}`}
        description={description}
        url={siteUrl}
        image={`${siteUrl}/static/og-image.jpg`}
      />

      <VerticalSpace size={48} />

      <Bio />

      <Divider mt="48px" mb="48px" />

      <Sidebar tags={tags} postCount={posts.length} />

      <PostList postList={posts} />
    </Layout>
  )
}

export default BlogIndex

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
        }
      }
    }
  }
`
