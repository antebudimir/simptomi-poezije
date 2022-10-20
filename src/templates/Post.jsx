import React, { useEffect } from "react"
import {
  BackLink,
  StyledEmailShareButton,
  StyledFacebookShareButton,
  StyledTelegramShareButton,
  StyledWhatsappShareButton,
} from "./Post.styled"
import { graphql } from "gatsby"
import { title as siteTitle, siteUrl } from "../../blog-config"
import SEO from "components/SEO"
import Layout from "components/Layout"
import Article from "components/Article"
import { FaArrowLeft } from "react-icons/fa"
import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share"
import useMediaQueries from "hooks/useMediaQueries"
import Subscribe from "components/Subscribe"
import { useState } from "react"

const imageTitles = [
  "nocna-straza",
  "drazesni-pupoljci-svibanjski",
  "spektakularan-susret",
]

const Post = ({ data }) => {
  const { isSmall } = useMediaQueries()
  const post = data.markdownRemark
  const { previous, next, seriesList } = data
  const { title, date, update, tags, series } = post.frontmatter
  const { excerpt } = post
  const { readingTime, slug } = post.fields
  const [metaImage, setMetaImage] = useState(`${siteUrl}/pisaca-masina.jpg`)

  // for metaImages
  const diacriticlessTitle = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace("đ", "dj")
    .replace(/\s+/g, "-") // white spaces

  useEffect(() => {
    imageTitles.filter(imageTitle => {
      if (imageTitle === diacriticlessTitle) {
        return setMetaImage(`${siteUrl}/${imageTitle}.jpg`)
      }
    })
  }, [])

  let filteredSeries = []
  if (series !== null) {
    filteredSeries = seriesList.edges.map(seriesPost => {
      if (seriesPost.node.id === post.id) {
        return {
          ...seriesPost.node,
          currentPost: true,
        }
      } else {
        return {
          ...seriesPost.node,
          currentPost: false,
        }
      }
    })
  }

  return (
    <Layout>
      <SEO
        title={`${title} | ${siteTitle}`}
        description={excerpt}
        url={`${siteUrl}${slug}`}
        image={metaImage}
      />

      <BackLink to="/" title="Vrati se na listu postova">
        <FaArrowLeft /> Natrag na listu postova
      </BackLink>

      <img src={diacriticlessTitle} alt="" />

      <Article>
        <Article.Header
          title={title}
          date={date}
          update={update}
          tags={tags}
          minToRead={Math.ceil(readingTime.minutes)}
        />
        <Article.Body html={post.html} />
        {filteredSeries.length > 0 && (
          <Article.Series header={series} series={filteredSeries} />
        )}

        <StyledEmailShareButton
          children={<EmailIcon size={48} borderRadius="5" />}
          subject={`Objava "${title}" sa bloga "Simptomi poezije"`}
          body={`<p>Baci oko na ovaj post.</p> <p>Mogao bi ti se svidjeti. 🙂</p>`}
          url={`${siteUrl}${slug}`}
          title={`Podijeli "${title}" putem email-a`}
        />
        <StyledFacebookShareButton
          children={<FacebookIcon size={48} borderRadius="5" />}
          url={`${siteUrl}${slug}`}
          quote={`Bacite oko na post "${title}" sa bloga "Simptomi poezije". Mogao bi vam se svidjeti. 🙂`}
          title={`Podijeli "${title}" na Facebook-u`}
        />
        <StyledTelegramShareButton
          children={<TelegramIcon size={48} borderRadius="5" />}
          url={`${siteUrl}${slug}`}
          title={`Baci oko na ovaj post. Mogao bi ti se svidjeti. 🙂`}
        />
        <StyledWhatsappShareButton
          children={<WhatsappIcon size={48} borderRadius="5" />}
          url={`${siteUrl}${slug}`}
          title={`Baci oko na ovaj post. Mogao bi ti se svidjeti. 🙂`}
        />
        <Article.Footer previous={previous} next={next} />
      </Article>

      {isSmall && <Subscribe />}
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $series: String
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 200, truncate: true)
      html
      frontmatter {
        title
        date(locale: "HR-hr", formatString: "DD[.] MMMM YYYY.")
        update(locale: "HR-hr", formatString: "DD[.] MMMM YYYY.")
        tags
        series
      }
      fields {
        slug
        readingTime {
          minutes
        }
      }
    }
    seriesList: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { series: { eq: $series } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
