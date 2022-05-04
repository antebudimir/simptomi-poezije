import React from "react"
import { NotFound } from "./404.styled"
import { Link } from "gatsby"
import { title as siteTitle, description, siteUrl } from "../../blog-config"
import Layout from "components/Layout"
import SEO from "components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title={`Greška 404 | ${siteTitle}`}
      description={description}
      url={siteUrl}
    />
    <NotFound>
      <h2>Greška 404</h2>

      <p>Nema tu ni stiha ni crtice.</p>
      <p>
        Vrati se natrag na{" "}
        <Link to="/" title="Povratak na naslovnu">
          {" "}
          <span className="link">naslovnu</span>
        </Link>{" "}
        i kreni iznova.
      </p>
    </NotFound>
  </Layout>
)

export default NotFoundPage
