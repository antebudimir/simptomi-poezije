import styled from "styled-components"

export const BioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
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
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.secondaryColor};
`

export const Description = styled.div`
  margin: 2rem 0;
  line-height: 1.5;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.secondaryColor};
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