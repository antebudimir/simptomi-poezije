import React, { useState, useEffect } from "react"
import _ from "lodash"
import styled from "styled-components"
import SEO from "components/SEO"
import filter from "lodash/filter"
import { graphql, navigate } from "gatsby"
import { title as siteTitle, description, siteUrl } from "../../blog-config"
import queryString from "query-string"
import Layout from "components/Layout"
import Title from "components/Title"
import TagList from "components/TagList"
import PostList from "components/PostList"
import VerticleSpace from "components/VerticalSpace"

const TagListWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const TagsPage = ({ data }) => {
  const tags = _.sortBy(data.allMarkdownRemark.group, ["totalCount"]).reverse()
  const posts = data.allMarkdownRemark.nodes

  const [selected, setSelected] = useState()
  const [filteredPosts, setFilteredPosts] = useState([])

  let query = null
  if (typeof document !== "undefined") {
    query = document.location.search
  }

  useEffect(() => {
    if (!selected) {
      setFilteredPosts(posts)
      return
    }

    setFilteredPosts(
      filter(posts, post => post.frontmatter.tags.indexOf(selected) !== -1)
    )
  }, [selected])

  useEffect(() => {
    const q = queryString.parse(query)["q"]
    setSelected(q)
  }, [query])

  const setSuffix = context => {
    if (filteredPosts.length > 1 && filteredPosts.length < 5) {
      return "a"
    } else if (filteredPosts.length > 4) {
      return context === "post" ? "ova" : "ih"
    } else {
      return ""
    }
  }

  return (
    <Layout>
      <SEO
        title={`${siteTitle} | Oznake`}
        description={description}
        url={siteUrl}
      />

      <TagListWrapper>
        {selected ? (
          <Title size="sm">
            {filteredPosts.length} post{setSuffix("post")} označen{setSuffix()}{" "}
            sa #{selected}
          </Title>
        ) : (
          <Title size="sm">
            {filteredPosts.length} post{setSuffix("post")}
          </Title>
        )}

        <TagList
          count
          tagList={tags}
          selected={selected}
          onClick={tag => {
            console.log(tag, selected)
            if (tag === selected) {
              navigate("/oznake")
              alert("zz")
            } else setSelected(tag)
          }}
        />
      </TagListWrapper>

      <VerticleSpace size={32} />

      <PostList postList={filteredPosts} />
    </Layout>
  )
}

export default TagsPage

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
