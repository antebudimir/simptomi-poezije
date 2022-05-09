import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import AGaramondProRegular from "fonts/AGaramondPro-Regular.woff"
import GillSansMTProBook from "fonts/GillSansMTPro-Book.woff"
import PalatinoLinotypeRoman from "fonts/PalatinoLinotype-Roman.woff"
import SabonRoman from "fonts/SabonRoman.woff"
import DehutiBook from "fonts/Dehuti-Book.woff"

const GlobalStyles = createGlobalStyle`
  ${reset}

@font-face {
	font-family: 'AGaramondProRegular';
	src: url(${AGaramondProRegular}) format('woff');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

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
    font-family: 'SabonRoman';
    src: url(${SabonRoman}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

/* maybe h1? */
@font-face {
    font-family: 'DehutiBook';
    src: url(${DehutiBook}) format('woff');
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
}

  h1 {
    font-family: 'DehutiBook';
    font-family: 'SabonRoman';
    font-family: 'PalatinoLinotypeRoman';
    font-family: 'AGaramondProRegular';  
}

  p {
    font-family: 'Gill Sans MT Pro Book';
    font-family: 'AGaramondProRegular';
    font-family: 'PalatinoLinotypeRoman';
}

 a {
      text-decoration: none;
 }

 button {
  padding-block: 0;
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
`

export default GlobalStyles
