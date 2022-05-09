import styled from "styled-components"

const StyledMarkdown = styled.div`
  & {
    font-size: 1.3rem;
    color: ${props => props.theme.colors.secondaryColor};
    line-height: 1.5;
    overflow: hidden;
  }

  & *:first-child {
    margin-top: 0;
  }

  & > p,
  & > ul,
  & > ol,
  & table,
  & blockquote,
  & pre,
  & img,
  & .katex-display {
    margin-top: 0;
    margin-bottom: 24px;
  }

  & > p:last-of-type {
    margin-bottom: 0px;
  }

  & p {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 11.2px 0 4.8px 0;
    font-weight: 700;
  }

  & h2 {
    margin-top: 64px;
    margin-bottom: 24px;
    font-size: 28px;
  }

  & h3 {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 22.4px;
  }

  & h4 {
    margin-top: 32px;
    margin-bottom: 24px;
    font-size: 17.6px;
  }

  & h5 {
    font-size: 16px;
  }

  & h6 {
    font-size: 14.4px;
  }

  & strong {
    font-weight: 700;
  }

  & em {
    font-style: italic;
  }

  & blockquote {
    border-radius: ${props => props.theme.spacing.primaryRadius};
    width: fit-content;
    padding: 18px 24px;
    background-color: ${props => props.theme.colors.quaternaryColor};

    & *:last-child {
      margin-bottom: 0;
    }
  }

  & blockquote blockquote {
    margin-top: 24px;
  }

  & ul,
  & ol {
    padding-left: 32px;
  }

  & ol {
    list-style: decimal;
  }

  & ul {
    list-style: disc;
  }

  & ul ul {
    list-style: circle;
  }

  & ul ul ul {
    list-style: square;
  }

  & li {
    margin-bottom: 12.8px;
  }

  & li p {
    margin-top: 8px;
  }

  & pre > code {
    font-size: 14.4px;
  }

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  & figcaption {
    margin-top: 5px;
    text-align: center;
    color: #868e96;
    font-size: 12px;
    font-style: italic;
  }

  & hr {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.quaternaryColor};
  }

  & a {
    padding: 1.6px 0;
    color: ${props => props.theme.colors.secondaryColor};
  }
`

export default StyledMarkdown
