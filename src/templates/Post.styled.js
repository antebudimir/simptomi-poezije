import styled from "styled-components"
import { Link } from "gatsby"
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share"

export const BackLink = styled(Link)`
  font-family: "Gill Sans MT Pro Bold";
`

export const StyledEmailShareButton = styled(EmailShareButton)`
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }

  @media (max-width: 768px) {
    margin: 0 0 0 12.8px;
  }
`

export const StyledFacebookShareButton = styled(FacebookShareButton)`
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }
`

export const StyledWhatsappShareButton = styled(WhatsappShareButton)`
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }
`
