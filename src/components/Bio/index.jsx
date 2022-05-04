import React from "react"
import { BioWrapper, Author, Description, LinksWrapper } from "./index.styled"
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { siteUrl, description, author, links } from "../../../blog-config"

const Link = ({ link, children }) => {
  if (!link) return null
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

const Bio = () => {
  const { facebook, linkedIn, email } = links

  return (
    <BioWrapper id="bio">
      {/* <Profile /> */}
      <div>
        <Author>{author}</Author>

        <Description>{description}</Description>

        <LinksWrapper>
          <Link link={facebook}>
            <FaFacebook title="Poveži se sa mnom na Facebook-u" />
          </Link>

          <Link link={linkedIn}>
            <FaLinkedin title="Poveži se sa mnom na LinkedInu-u" />
          </Link>

          <Link link={email}>
            <FaEnvelope title="Javi se putem mail-a" />
          </Link>
        </LinksWrapper>
      </div>
    </BioWrapper>
  )
}

export default Bio
