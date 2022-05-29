import styled from "styled-components"

export const BioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

// export const profileImageRoot =
//   typeof window !== "undefined" && window.location.host === "localhost:8000"
//     ? "http://localhost:8000"
//     : siteUrl

// export const Profile = styled.div`
//   flex: 0 0 auto;
//   margin-right: 16px;
//   width: 128px;
//   height: 128px;
//   border-radius: 50%;
//   background-image: url(${profileImageRoot}/profile.png);
//   background-size: cover;
//   background-position: center;
// `

export const Author = styled.div`
  margin-bottom: 4.8px;
  font-family: "Gill Sans MT Pro Bold";
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.secondaryColor};

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`

export const Description = styled.div`
  margin: 2rem 0;
  color: ${props => props.theme.colors.secondaryColor};
  font-family: "PalatinoLinotypeRoman";
  font-size: 1.1rem;
  line-height: 1.6;

  @media screen and (min-width: 600px) {
    font-size: 1.35rem;
  }
`

export const LinksWrapper = styled.div`
  & svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;
    cursor: pointer;
  }

  & svg path {
    fill: ${props => props.theme.colors.secondaryColor};
    transition: fill 300ms;
  }

  & a:hover svg path,
  & a:focus svg path {
    fill: ${props => props.theme.colors.quinaryColor};
  }
`
