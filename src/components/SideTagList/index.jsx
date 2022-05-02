import React from "react"
import _ from "lodash"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  width: 10rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.quaternaryColor};
  font-size: 1.1rem;

  /* @media (max-width: 1300px) {
  display: none;
} */
`

const Title = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondaryColor};
`

const Tag = styled.li`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.secondaryColor};
  cursor: pointer;
  transition: color ${props => props.theme.timing.primaryTiming};

  &:hover,
  & a:focus {
    color: ${props => props.theme.colors.quinaryColor};
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`

const SideTagList = ({ tags, postCount }) => {
  return (
    <Wrapper>
      <Title>OZNAKE</Title>

      <ul>
        <Tag>
          <Link to="/oznake" title="Pogledaj sve postove">
            sve ({postCount})
          </Link>
        </Tag>

        {_.map(tags, tag => (
          <Tag>
            <Link
              to={`/oznake?q=${tag.fieldValue}`}
              title={`Pogledaj sve postove s oznakom ${tag.fieldValue}`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </Tag>
        ))}
      </ul>
    </Wrapper>
  )
}

export default SideTagList
