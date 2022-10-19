import React, { useState, useCallback } from "react"
import styled from "styled-components"
import SEO from "components/SEO"
import { graphql } from "gatsby"
import { title as siteTitle, description, siteUrl } from "../../blog-config"
import Layout from "components/Layout"
import PostList from "components/PostList"
import TextField from "components/TextField"
import Title from "components/Title"
import VerticalSpace from "components/VerticalSpace"

const SearchWrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Search = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  const [query, setQuery] = useState("")

  const filteredPosts = useCallback(
    posts.filter(post => {
      const { frontmatter, rawMarkdownBody } = post
      const { title } = frontmatter
      const lowerQuery = query.toLocaleLowerCase()

      if (rawMarkdownBody.toLocaleLowerCase().includes(lowerQuery)) return true

      return title.toLocaleLowerCase().includes(lowerQuery)
    }),
    [query]
  )

  const setSuffix = () => {
    if (filteredPosts.length > 1 && filteredPosts.length < 5) {
      return "a"
    } else if (filteredPosts.length > 4) {
      return "ova"
    } else {
      return ""
    }
  }

  return (
    <Layout>
      <SEO
        title={`Pretraga | ${siteTitle}`}
        description={description}
        url={siteUrl}
        image={`${siteUrl}/pisaca-masina.jpg`}
      />

      <SearchWrapper>
        <Title size="sm">
          {filteredPosts.length} post{setSuffix()}
        </Title>

        <TextField
          onChange={e => setQuery(e.target.value)}
          placeholder="Upiši pojam za pretragu"
        />
      </SearchWrapper>

      <VerticalSpace size={70} />

      <PostList postList={filteredPosts} />
    </Layout>
  )
}

export default Search

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(locale: "HR-hr", formatString: "DD[.] MMMM YYYY.")
          title
          tags
        }
        rawMarkdownBody
      }
    }
  }
`
