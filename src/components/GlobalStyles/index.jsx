import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import GillSansMTProBook from "fonts/GillSansMTPro-Book.woff"
import PalatinoLinotypeRoman from "fonts/PalatinoLinotype-Roman.woff"
// import FolioBook from "fonts/FolioBT-Book.woff"
import FolioBook from "fonts/Folio-Bold.woff"
import MerriweatherRegular from "fonts/Merriweather-Regular.woff"

const GlobalStyles = createGlobalStyle`
  ${reset}

@font-face {
    font-family: 'Gill Sans MT Pro Book';
    src: url(${GillSansMTProBook}) format('woff');
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

@font-face {
    font-family: 'FolioBook';
    src: url(${FolioBook}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Merriweather Regular';
    src: url(${MerriweatherRegular}) format('woff');
    font-weight: normal;
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
    font-family: 'FolioBook';
    /* font-family: 'Gill Sans MT Pro Book'; */
}

  p {
    font-family: 'PalatinoLinotypeRoman';
    font-family: 'Merriweather Regular';
}

 a {
    text-decoration: none;
 }

 button {
  padding-block: 0;
 }
`

export default GlobalStyles
