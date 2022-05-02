import styled from "styled-components"
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share"

export const StyledEmailShareButton = styled(EmailShareButton)`
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }
`

export const StyledFacebookShareButton = styled(FacebookShareButton)`
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform ${props => props.theme.timing.primaryTiming};
  }
`

export const StyledTelegramShareButton = styled(TelegramShareButton)`
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
