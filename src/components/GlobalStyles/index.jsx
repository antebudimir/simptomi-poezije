import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import GillSansMTProBold from "fonts/GillSansMTPro-Bold.woff"
import GillSansMTProMedium from "fonts/GillSansMTPro-Medium.woff"
import PalatinoLinotypeRoman from "fonts/PalatinoLinotype-Roman.woff"

const GlobalStyles = createGlobalStyle`
  ${reset}

@font-face {
    font-family: 'Gill Sans MT Pro Bold';
    src: url(${GillSansMTProBold}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Gill Sans MT Pro Medium';
    src: url(${GillSansMTProMedium}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PalatinoLinotypeRoman';
    src: url(${PalatinoLinotypeRoman}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

  * {
    outline: none;
    border: none;
    padding-inline: 0;
}

  body {
    background: ${props => props.theme.colors.primaryColor};
    font-family: 'Gill Sans MT Pro Medium';
}

  html,
  body {
	scrollbar-color: ${props => props.theme.colors.secondaryColor} ${props =>
  props.theme.colors.quaternaryColor};
}

  body::-webkit-scrollbar {
    height: 12px;
}

  body::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.quaternaryColor};
}

  body::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondaryColor};
}

  h1,
  h2 {
    font-family: 'Gill Sans MT Pro Bold';
}

  p {
    font-family: 'PalatinoLinotypeRoman';
}

 a {
    text-decoration: none;
 }

 button {
  padding-block: 0;
 }
`

export default GlobalStyles
