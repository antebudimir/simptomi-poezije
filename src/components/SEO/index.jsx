import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, url, image }) => {
  return (
    <Helmet htmlAttributes={{ lang: "hr" }}>
      <title>{title}</title>

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}

export default SEO
